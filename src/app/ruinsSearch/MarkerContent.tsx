import React from "react";
import * as styles from "./MarkerContent.css";

const MarkerContent = (title: string) => {
  return `
  <div class=${styles.container}>
    <div class=${styles.mapPin}>
      <div class=${styles.mapPinAfter}></div>
    </div>

  </div>
  `;
};

export default MarkerContent;
