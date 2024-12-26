import { useCallback, useEffect, useState } from "react";
import { makeMarkerClustering } from "@/utils/markerClustering";

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
  markers?: naver.maps.Marker[],
  onMarkerClick?: (marker: naver.maps.Marker) => void
) => {
  const [nmap, setnmap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    if (nmap) {
      addMapEvent("idle", () => {
        if (nmap.getZoom() >= 12) {
          updateMarkers();
        }
      });

      markers?.forEach((marker) => {
        naver.maps.Event.addListener(marker, "click", () => {
          nmap.panTo(marker.getPosition(), { duration: 300, easing: "easeInCubic" });
          onMarkerClick && onMarkerClick(marker);
        });
      });

      initMarkerCluster();
      getCurrentLocation();
    }
  }, [nmap, markers]);

  const initializeMap = () => {
    setnmap(
      new naver.maps.Map(mapId, {
        center: center
          ? new naver.maps.LatLng(...center)
          : new naver.maps.LatLng(37.3595704, 127.105399),
        size: size ? size : { width: 400, height: 400 },
        zoom: zoom ? zoom : 16,
        mapTypeId: "terrain",
      })
    );
  };

  const initMarkerCluster = useCallback(() => {
    if (markers && markers.length > 0) {
      const MarkerClustering = makeMarkerClustering(window.naver);
      const markerClustering = new MarkerClustering({
        minClusterSize: 1,
        maxZoom: 12,
        map: nmap,
        markers,
        disableClickZoom: false,
        gridSize: 100,
        icons: [
          {
            content:
              '<div style="display:flex;justify-content: center;align-items:center;cursor:pointer;width:40px;height:40px;line-height:42px;font-size:14px;color:white;text-align:center;font-weight:bold;background-size:contain; border-radius: 50%;background-color:#0033A0;"></div>',
            size: new naver.maps.Size(40, 40),
            anchor: new naver.maps.Point(20, 20),
          },
        ],
        indexGenerator: [10, 100, 200, 500, 1000],
        stylingFunction: (clusterMarker: any, count: number) => {
          if (clusterMarker) {
            const firstChild = clusterMarker.getElement().querySelector("div:first-child");
            if (firstChild) {
              firstChild.innerHTML = count;
            }
          }
        },
      });
    }
  }, [markers, nmap]);

  const getCurrentLocation = () => {
    if (nmap && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var lat = position.coords.latitude; // 위도
          var lng = position.coords.longitude; // 경도
          var currentLocation = new naver.maps.LatLng(lat, lng);

          nmap.setCenter(currentLocation);
        },
        (error) => {
          console.error("현재 위치를 가져오는 중 에러 발생:", error.message);
        }
      );
    } else {
      console.error("Geolocation을 지원하지 않는 브라우저입니다.");
    }
  };

  const addMapEvent = useCallback(
    <T extends keyof NaverMapEventHandlers>(
      eventName: T,
      handler: (e: NaverMapEventHandlers[T]) => void
    ) => {
      if (nmap) {
        naver.maps.Event.addListener(nmap, eventName, handler);
      }
    },
    [nmap]
  );

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
            if (!marker.getMap()) {
              marker.setMap(nmap);
            }
          } else {
            if (marker.getMap()) {
              marker.setMap(null);
            }
          }
        });
    }
  }, [markers, nmap]);

  return {
    nmap,
    initializeMap,
    addMapEvent,
    mapMarker,
    updateMarkers,
  };
};

export default useMap;
