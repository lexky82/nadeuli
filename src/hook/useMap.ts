import { useCallback } from "react";

type mapId = string;
type center = [number, number];
type size = { width: number; height: number };

const useMap = (mapId: mapId, center: center, size: size) => {
  const initializeMap = useCallback(() => {
    let nmap: naver.maps.Map;

    nmap = new naver.maps.Map(mapId, {
      center: new naver.maps.LatLng(...center),
      size: size,
      zoom: 16,
    });
  }, []);

  return {
    initializeMap,
  };
};
export default useMap;
