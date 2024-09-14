"use client";

import useMap from "@/hook/useMap";
import { useEffect, useRef } from "react";

export default function NaverMap() {
  const { initializeMap } = useMap("map", [37.3595704, 127.105399], { width: 1920, height: 918 });
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    initializeMap();
  }, [mapRef]);

  return <div id="map"></div>;
}
