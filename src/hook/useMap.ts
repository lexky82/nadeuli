import { useCallback } from "react";

type mapId = string;

interface mapOptionType {
  center?: [number, number];
  size?: { width: number; height: number };
  zoom?: number;
}

export interface NaverMapEventHandlers {
  click: naver.maps.PointerEvent;
  bounds_changed: naver.maps.PointBounds;
  zoom_changed: number;
}

const useMap = (mapId: mapId, { center, size, zoom }: mapOptionType) => {
  let nmap: naver.maps.Map;

  const initializeMap = useCallback(() => {
    nmap = new naver.maps.Map(mapId, {
      center: center
        ? new naver.maps.LatLng(...center)
        : new naver.maps.LatLng(37.3595704, 127.105399),
      size: size ? size : { width: 400, height: 400 },
      zoom: zoom ? zoom : 16,
    });
  }, []);

  const addMapEvent = <T extends keyof NaverMapEventHandlers>(
    eventName: T,
    handler: (e: NaverMapEventHandlers[T]) => void
  ) => {
    if (nmap) {
      naver.maps.Event.addListener(nmap, eventName, handler as any);
    }
  };

  const mapMarker = useCallback(
    ({ position, title }: { position: [number, number]; title: string }) => {
      if (nmap) {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(...position),
          map: nmap,
          title,
        });
      }
    },
    []
  );

  return {
    initializeMap,
    addMapEvent,
    mapMarker,
  };
};

export default useMap;
