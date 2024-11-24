import { useCallback, useEffect, useState } from "react";

type mapId = string;

interface mapOptionType {
  center?: [number, number];
  size?: { width: number; height: number };
  zoom?: number;
}

export interface NaverMapEventHandlers {
  click: naver.maps.PointerEvent;
  bounds_changed: naver.maps.Bounds;
  center_changed: naver.maps.Coord;
  dragend: naver.maps.PointerEvent;
  idle: naver.maps.KVO;
  zoom_changed: number;
}

const useMap = (
  mapId: mapId,
  { center, size, zoom }: mapOptionType,
  markers?: naver.maps.Marker[]
) => {
  const [nmap, setnmap] = useState<naver.maps.Map | undefined>();

  const initializeMap = () => {
    setnmap(
      new naver.maps.Map(mapId, {
        center: center
          ? new naver.maps.LatLng(...center)
          : new naver.maps.LatLng(37.3595704, 127.105399),
        size: size ? size : { width: 400, height: 400 },
        zoom: zoom ? zoom : 16,
      })
    );
  };

  const addMapEvent = <T extends keyof NaverMapEventHandlers>(
    eventName: T,
    handler: (e: NaverMapEventHandlers[T]) => void
  ) => {
    if (nmap) {
      naver.maps.Event.addListener(nmap, eventName, handler);
    }
  };

  const mapMarker = useCallback(
    ({ position, title }: { position: [number, number]; title: string }) => {
      if (nmap) {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(...position),
          map: nmap,
          title,
        });
      }
    },
    []
  );

  const updateMarkers = useCallback(() => {
    if (nmap) {
      const bounds = nmap.getBounds();

      markers &&
        markers.forEach((marker) => {
          if (bounds.hasPoint(marker.getPosition())) {
            if (!marker.getMap()) marker.setMap(nmap);
          } else {
            if (marker.getMap()) {
              marker.setMap(null);
            }
          }
        });
    }
  }, [markers, nmap]);

  return {
    initializeMap,
    addMapEvent,
    mapMarker,
    updateMarkers,
  };
};

export default useMap;
