"use client";

import Image from "next/image";
import NaverMap, { responseMarkerData } from "../../components/NaverMap";
import { useEffect, useMemo, useState } from "react";
import RuinsDetail from "./RuinsDetail";
import * as styles from "./style.css";
import { mapContentsType } from "../../utils/exampleData";
import axios from "axios";
import { themeVars } from "@/styles/globalTheme.css";

interface RenderRuins {
  ID: number;
  POI_ID: number;
  POI_NM: string;
  CL_CD: number;
  CL_NM: string;
  CTPRVN_NM: string;
  SIGNGU_NM: string;
  LEGALDONG_NM: string;
  LI_NM: string;
  LNBR_NO: string;
  RDNMADR_NM: string;
  BULD_NO: string;
  LC_LA: number;
  LC_LO: number;
}

interface RuinsFilter {
  tomb: boolean;
  traditionalHouse: boolean;
  palace: boolean;
  fortress: boolean;
  ruins: boolean;
  site: boolean;
  koreanAcademy: boolean;
  temple: boolean;
}

const runinsSearchPage = ({}) => {
  const [selectedRuins, setSelectedRuins] = useState<number | null>(null);
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);
  const [renderRuins, setRenderRuins] = useState<RenderRuins[]>([]);
  const [ruinsFilter, setRuinsFilter] = useState([
    { id: "tomb", name: "고분", visible: false },
    { id: "traditionalHouse", name: "고택", visible: false },
    { id: "palace", name: "고궁", visible: false },
    { id: "fortress", name: "방어시설", visible: false },
    { id: "ruins", name: "유적·사적", visible: false },
    { id: "site", name: "터", visible: false },
    { id: "koreanTraditoinalAcademy", name: "서원", visible: false },
    { id: "temple", name: "사찰", visible: false },
  ]);

  useEffect(() => {
    axios.get("/api/ruins/locations").then((res) => {
      if (res.status === 200) {
        const resData: responseMarkerData[] = res.data.locations;

        setMarkers(
          resData.map(
            (marker) =>
              new naver.maps.Marker({
                position: new naver.maps.LatLng(...marker.position),
                title: `(${marker.id}) ${marker.title}`,
                map: undefined,
                clickable: true,
              })
          )
        );
      }
    });
  }, []);

  const titleClickHandler = (ruinsId: number) => {
    setSelectedRuins(ruinsId);
  };

  const closeDetailPanel = () => {
    setSelectedRuins(null);
  };

  const handleIdle = async (e: naver.maps.KVO) => {
    const { _max, _min } = e.__targets.scale.target.bounds;
    const { x: maxX, y: maxY } = _max;
    const { x: minX, y: minY } = _min;

    const res = await axios.get("/api/ruins/locations", {
      params: {
        minLat: minY,
        maxLat: maxY,
        minLng: minX,
        maxLng: maxX,
      },
    });

    if (res.status === 200) {
      setRenderRuins(res.data.locations);
    }
  };

  const handleMarkerClick = (marker: naver.maps.Marker) => {
    setSelectedRuins(parseInt(marker.getTitle().match(/\d+/g)?.join("") || ""));
  };

  const parentSize = useMemo(() => ({ width: 1920, height: 848 }), []);

  return (
    <div className={styles.ruinsSearchContainer}>
      <aside className={styles.mapAsideContainer}>
        <div className={styles.divider}>
          <div className={styles.asideWrapper}>
            {ruinsFilter.map((site, key) => {
              return (
                <div
                  className={styles.siteItemWrapper}
                  key={key}
                  onClick={() => {
                    setRuinsFilter(
                      ruinsFilter.map((item) => {
                        return item.id === site.id ? { ...site, visible: !site.visible } : item;
                      })
                    );
                  }}
                >
                  <div
                    className={styles.siteIcon}
                    style={site.visible ? { background: themeVars.colors.secondary } : {}}
                  />
                  <span className={styles.siteText}>{site.name}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.contentsContainer}>
            {renderRuins &&
              renderRuins.map((content, key) => {
                return (
                  <div className={styles.contentsWrapper} key={key}>
                    <Image
                      src="https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg"
                      alt={`${content.POI_NM} thumnail`}
                      width={130}
                      height={90}
                      className={styles.thumbnailImage}
                      onClick={() => setSelectedRuins(content.ID)}
                    />
                    <div>
                      <p
                        onClick={() => titleClickHandler(content.ID)}
                        className={styles.contentTitle}
                      >
                        {content.POI_NM}
                      </p>
                      <p className={styles.contentLocation}>
                        {[
                          content.CTPRVN_NM,
                          content.SIGNGU_NM,
                          content.LEGALDONG_NM,
                          content.RDNMADR_NM,
                        ].join(" ")}
                      </p>
                      <p className={styles.distanceText}>나와의 거리: km</p>
                      <p className={styles.travelEssayText}>기행문: 장</p>
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
        onIdle={handleIdle}
        size={parentSize}
        markers={markers}
        onMarkerClick={handleMarkerClick}
        selectedId={selectedRuins}
      />
    </div>
  );
};
export default runinsSearchPage;
