"use client";

import useMap, { NaverMapEventHandlers } from "@/hook/useMap";
import { memo, useEffect } from "react";

export interface responseMarkerData {
  id: number;
  position: [number, number];
  title: string;
}

interface NaverMapProps {
  id: string;
  selectedId?: number | string | null;
  onBoundsChanged?: (event: NaverMapEventHandlers["bounds_changed"]) => void;
  onCenterChanged?: (event: NaverMapEventHandlers["center_changed"]) => void;
  onDragEnd?: (event: NaverMapEventHandlers["dragend"]) => void;
  onIdle?: (event: NaverMapEventHandlers["idle"]) => void;
  center?: [number, number];
  size?: { width: number; height: number };
  zoom?: number;
  markers?: naver.maps.Marker[];
  onMarkerClick?: (marker: naver.maps.Marker) => void;
}

const NaverMap = memo(function NaverMap({
  id,
  selectedId,
  onBoundsChanged,
  onCenterChanged,
  onDragEnd,
  onIdle,
  center,
  size,
  zoom,
  markers,
  onMarkerClick,
}: NaverMapProps) {
  const { nmap, initializeMap, addMapEvent } = useMap(
    id,
    {
      center: center,
      size: size,
      zoom: zoom,
    },
    markers,
    onMarkerClick
  );

  useEffect(() => {
    initializeMap();
  }, []);

  useEffect(() => {
    if (selectedId) {
      markers &&
        markers
          .find(
            (marker) => parseInt(marker.getTitle().match(/\d+/g)?.join("") || "") === selectedId
          )
          ?.trigger("click");
    }
  }, [selectedId, markers]);

  useEffect(() => {
    if (nmap) {
      onCenterChanged && addMapEvent("center_changed", onCenterChanged);
      onBoundsChanged && addMapEvent("bounds_changed", onBoundsChanged);
      onDragEnd && addMapEvent("dragend", onDragEnd);
      onIdle && addMapEvent("idle", onIdle);
    }
  }, [nmap]);

  return <div id={id} />;
});

export default NaverMap;
