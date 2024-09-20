"use client";

import Image from "next/image";
import NaverMap from "./NaverMap";
import { useState } from "react";
import RuinsDetail from "./RuinsDetail";
import * as styles from "./style.css";

const mapContentsType = ["고분", "고택", "고궁", "방어시설", "유적·사적", "터", "서원", "사찰"];
const mapContents = [
  {
    id: 1,
    thumnail:
      "https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg",
    title: "example",
    location: "충청북도 보은군 보은읍 성주1길 104",
    fromMyLocation: 134.7,
    travelessayCount: 104,
    viewDetail: "",
  },
  {
    id: 2,
    thumnail:
      "https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg",
    title: "example",
    location: "서울 동대문구 망우로21길 52 C동 지하1층",
    fromMyLocation: 134.7,
    travelessayCount: 104,
    viewDetail: "",
  },
  {
    id: 2,

    thumnail:
      "https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg",
    title: "example",
    location: "서울 동대문구 망우로21길 52 C동 지하1층",
    fromMyLocation: 134.7,
    travelessayCount: 104,
    viewDetail: "",
  },
];

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
