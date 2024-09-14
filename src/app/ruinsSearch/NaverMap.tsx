"use client";

import useMap from "@/hook/useMap";
import { useEffect, useRef } from "react";

export default function NaverMap() {
  const mapRef = useRef<HTMLElement | null>(null);
  const { initializeMap } = useMap("map", { size: { width: 1920, height: 918 } });

  useEffect(() => {
    initializeMap();
  }, [mapRef]);

  return <div id="map" />;
}
