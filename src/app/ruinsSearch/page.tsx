"use client";

import Image from "next/image";
import NaverMap, { responseMarkerData } from "../../components/NaverMap";
import { useEffect, useState } from "react";
import RuinsDetail from "./RuinsDetail";
import * as styles from "./style.css";
import { mapContentsType, mapContents } from "../../utils/exampleData";
import axios from "axios";

const runinsSearchPage = ({}) => {
  const [selectedRuins, setSelectedRuins] = useState<number | null>(null);
  const [markers, setMarkers] = useState<responseMarkerData[]>([]);

  useEffect(() => {
    axios.get("/api/ruins/locations").then((res) => {
      if (res.status === 200) {
        const resData: responseMarkerData[] = res.data.locations;
        setMarkers(resData);
      }
    });
  }, []);

  const titleClickHandler = (ruinsId: number) => {
    setSelectedRuins(ruinsId);
  };

  const closeDetailPanel = () => {
    setSelectedRuins(null);
  };

  const handleBoundsChanged = async (e: naver.maps.KVO) => {
    // const { _max, _min } = e.__targets.scale.target.bounds;
    // const { x: maxX, y: maxY } = _max;
    // const { x: minX, y: minY } = _min;
    // const res = await axios.get("/api/ruins/locations", {
    //   params: {
    //     minLat: minY,
    //     maxLat: maxY,
    //     minLng: minX,
    //     maxLng: maxX,
    //   },
    // });
    // if (res.status === 200) {
    //   const resData: responseMarkerData[] = res.data.locations;
    //   setAccumulationMarkers(resData);
    //   setRendingMarkers(resData);
    // }
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

      <NaverMap
        id="map"
        onIdle={handleBoundsChanged}
        size={{ width: 1920, height: 848 }}
        markers={markers.map(
          (marker) =>
            new naver.maps.Marker({
              position: new naver.maps.LatLng(...marker.position),
              title: marker.title,
              map: undefined,
            })
        )}
      />
    </div>
  );
};
export default runinsSearchPage;
