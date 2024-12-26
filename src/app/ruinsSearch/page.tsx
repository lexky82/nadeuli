"use client";

import Image from "next/image";
import NaverMap, { responseMarkerData } from "../../components/NaverMap";
import { useEffect, useMemo, useState } from "react";
import RuinsDetail from "./RuinsDetail";
import * as styles from "./style.css";
import axios from "axios";
import { themeVars } from "@/styles/globalTheme.css";
import MarkerContent from "./MarkerContent";

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
  position: [number, number];
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

export interface RuinsInfo {
  BULD_NO: string;
  CL_CD: number;
  CL_NM: string; // "고택/생가/민속마을";
  CTPRVN_NM: string; //"경기도";
  ID: number;
  LC_LA: string; //"37.3755076";
  LC_LO: string; //"127.1246685";
  LEGALDONG_NM: string; //"수내동";
  LI_NM: string;
  LNBR_NO: string;
  POI_ID: number;
  POI_NM: string; //"수내동가옥";
  RDNMADR_NM: string; //"성남대로";
  SIGNGU_NM: string; //"성남시 분당구";
  Summary: string;
  ThumbsUp: number;
  View: number;
}

const runinsSearchPage = ({}) => {
  const [selectedRuins, setSelectedRuins] = useState<number | null>(null);
  const [selectedRuinsInfo, setSelectedRuinsInfo] = useState<RuinsInfo | null>(null);
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);
  const [renderRuins, setRenderRuins] = useState<RenderRuins[]>([]);
  const [ruinsFilter, setRuinsFilter] = useState([
    { id: 1, name: "왕릉·고분", visible: true },
    { id: 2, name: "고택·생가", visible: true },
    { id: 3, name: "궁궐", visible: true },
    { id: 4, name: "성·성터", visible: true },
    { id: 5, name: "유적·사적", visible: true },
    { id: 6, name: "천연기념물", visible: true },
    { id: 7, name: "서원·향교", visible: true },
    { id: 8, name: "사찰", visible: true },
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
                icon: {
                  content: MarkerContent(marker.title),
                  anchor: new naver.maps.Point(12, 36),
                },
                clickable: true,
              })
          )
        );
      }
    });
  }, []);

  useEffect(() => {
    selectedRuins &&
      axios.get(`/api/ruins/ruinsInfo/${selectedRuins}`).then((res) => {
        setSelectedRuinsInfo(res.data.ruins);
      });
  }, [selectedRuins]);

  const titleClickHandler = (ruinsId: number) => {
    setSelectedRuins(ruinsId);
  };

  const closeDetailPanel = () => {
    setSelectedRuins(null);
    setSelectedRuinsInfo(null);
  };

  const handleIdle = async (e: naver.maps.KVO) => {
    const { _max, _min } = e.__targets.scale.target.bounds;
    const { zoom } = e.__targets.zoom.target;

    if (zoom <= 11) {
      return setRenderRuins([]);
    }

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
      setRenderRuins(res.data.locations as RenderRuins[]);
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
                    style={site.visible ? { background: themeVars.colors.primary } : {}}
                  />
                  <span className={styles.siteText}>{site.name}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.contentsContainer}>
            {renderRuins &&
              renderRuins
                .filter((ruin) =>
                  ruinsFilter.some((filter) => filter.visible && filter.id === ruin.CL_CD)
                )
                .map((content, key) => {
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

        {selectedRuinsInfo && (
          <RuinsDetail ruinsInfo={selectedRuinsInfo} closeDetailPanel={closeDetailPanel} />
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
