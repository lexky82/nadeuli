"use client";

import useMap from "@/hook/useMap";
import { useEffect, useRef } from "react";

export default function NaverMap() {
  const { initializeMap, addMapEvent } = useMap("map", {
    size: { width: 1920, height: 848 },
  });

  useEffect(() => {
    initializeMap();

    addMapEvent("center_changed", (e) => {
      console.log(e);
    });
  }, []);

  return <div id="map" />;
}
