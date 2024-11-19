"use client";

import useMap, { NaverMapEventHandlers } from "@/hook/useMap";
import { useEffect } from "react";

export interface marker {
  position: [number, number];
  title: string;
}

interface NaverMapProps {
  id: string;
  onBoundsChanged?: (event: NaverMapEventHandlers["bounds_changed"]) => void;
  center?: [number, number];
  size?: { width: number; height: number };
  zoom?: number;
  marker?: marker[];
}

export default function NaverMap({
  id,
  onBoundsChanged,
  center,
  size,
  zoom,
  marker,
}: NaverMapProps) {
  const { initializeMap, addMapEvent, mapMarker } = useMap(id, {
    center: center,
    size: size,
    zoom: zoom,
  });

  useEffect(() => {
    initializeMap();

    onBoundsChanged && addMapEvent("bounds_changed", onBoundsChanged);
    marker &&
      marker.map(({ position, title }) => {
        mapMarker({ position, title });
      });
  }, []);

  return <div id={id} />;
}
