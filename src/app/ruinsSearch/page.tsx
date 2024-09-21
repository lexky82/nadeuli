"use client";

import Image from "next/image";
import NaverMap from "./NaverMap";
import { useState } from "react";
import RuinsDetail from "./RuinsDetail";
import * as styles from "./style.css";
import { mapContentsType, mapContents } from "../exampleData";

const runinsSearchPage = ({}) => {
  const [selectedRuins, setSelectedRuins] = useState<number | null>(null);

  const titleClickHandler = (ruinsId: number) => {
    setSelectedRuins(ruinsId);
  };

  const closeDetailPanel = () => {
    setSelectedRuins(null);
  };

  return (
    <div className={styles.ruinsSearchContainer}>
      <aside className={styles.mapAsideContainer}>
        <div className={styles.divider}>
          <div className={styles.asideWrapper}>
            {mapContentsType.map((site, key) => {
              return (
                <div className={styles.siteItemWrapper} key={key}>
                  <div className={styles.siteIcon} />
                  <span className={styles.siteText}>{site}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.contentsContainer}>
            {mapContents.map((content, key) => {
              return (
                <div className={styles.contentsWrapper} key={key}>
                  <Image
                    src={content.thumnail}
                    alt={`${content.title} thumnail`}
                    width={130}
                    height={90}
                    className={styles.thumbnailImage}
                    onClick={() => setSelectedRuins(content.id)}
                  />
                  <div>
                    <p
                      onClick={() => titleClickHandler(content.id)}
                      className={styles.contentTitle}
                    >
                      {content.title}
                    </p>
                    <p className={styles.contentLocation}>{content.location}</p>
                    <p className={styles.distanceText}>나와의 거리: {content.fromMyLocation}km</p>
                    <p className={styles.travelEssayText}>기행문: {content.travelessayCount}장</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedRuins && (
          <RuinsDetail ruinsId={selectedRuins} closeDetailPanel={closeDetailPanel} />
        )}
      </aside>

      <NaverMap />
    </div>
  );
};
export default runinsSearchPage;
