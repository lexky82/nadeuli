"use client";

import useMap, { NaverMapEventHandlers } from "@/hook/useMap";
import { useEffect } from "react";

export interface responseMarkerData {
  id: number;
  position: [number, number];
  title: string;
}

interface NaverMapProps {
  id: string;
  onBoundsChanged?: (event: NaverMapEventHandlers["bounds_changed"]) => void;
  onCenterChanged?: (event: NaverMapEventHandlers["center_changed"]) => void;
  onDragEnd?: (event: NaverMapEventHandlers["dragend"]) => void;
  onIdle?: (event: NaverMapEventHandlers["idle"]) => void;
  center?: [number, number];
  size?: { width: number; height: number };
  zoom?: number;
  markers?: naver.maps.Marker[];
}

export default function NaverMap({
  id,
  onBoundsChanged,
  onCenterChanged,
  onDragEnd,
  onIdle,
  center,
  size,
  zoom,
  markers,
}: NaverMapProps) {
  const { initializeMap, addMapEvent, updateMarkers } = useMap(
    id,
    {
      center: center,
      size: size,
      zoom: zoom,
    },
    markers
  );

  useEffect(() => {
    initializeMap();
    onCenterChanged && addMapEvent("center_changed", onCenterChanged);
    onBoundsChanged && addMapEvent("bounds_changed", onBoundsChanged);
    onDragEnd && addMapEvent("dragend", onDragEnd);
    onIdle && addMapEvent("idle", onIdle);
  }, []);

  useEffect(() => {
    if (markers && markers.length > 1) {
      addMapEvent("idle", () => updateMarkers());
    }
  }, [markers]);

  return <div id={id} />;
}
