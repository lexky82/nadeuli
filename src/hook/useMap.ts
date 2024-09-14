import { useCallback } from "react";

type mapId = string;

interface mapOptionType {
  center?: [number, number];
  size?: { width: number; height: number };
  zoom?: number;
}

const useMap = (mapId: mapId, { center, size, zoom }: mapOptionType) => {
  const initializeMap = useCallback(() => {
    let nmap: naver.maps.Map;

    nmap = new naver.maps.Map(mapId, {
      center: center
        ? new naver.maps.LatLng(...center)
        : new naver.maps.LatLng(37.3595704, 127.105399),
      size: size ? size : { width: 400, height: 400 },
      zoom: zoom ? zoom : 16,
    });
  }, []);

  return {
    initializeMap,
  };
};

export default useMap;
