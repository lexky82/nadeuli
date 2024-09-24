"use client";

import { useEffect, useState } from "react";
import useMap from "@/hook/useMap";

interface LocationProps {
  mapId: string;
}

export const Location = ({ mapId }: LocationProps) => {
  const { initializeMap, mapMarker } = useMap(mapId, {
    size: {
      width: 950,
      height: 300,
    },
    center: [36.489167, 127.741667],
  });

  useEffect(() => {
    initializeMap();

    mapMarker({
      position: [36.489167, 127.741667],
      title: "삼년산성",
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div id={mapId} />
    </div>
  );
};
