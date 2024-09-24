"use client";

import { columns, dataSource, exmapleFetchData } from "@/app/exampleData";
import { GlassBox } from "@/components/atom/GlassBox";
import Image from "next/image";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import * as styles from "../../ruinsSearch/ruinsDetail.style.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Table } from "@/components/Table";
import useMap from "@/hook/useMap";

interface Params {
  params: {
    ruinsId: number;
  };
}

const RuinsInformation = ({ params }: Params) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { initializeMap, mapMarker } = useMap(`${params.ruinsId}`, {
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
    <div>
      <div style={{ position: "relative", width: "100vw", height: "400px" }}>
        <Image
          src="/ruinsTopExampe.jpg"
          alt="exa"
          fill
          style={{
            objectFit: "cover",
          }}
        />

        <GlassBox
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // 정가운데로 이동
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px 25px",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          삼년산성
        </GlassBox>

        <GlassBox
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            padding: "15px 25px",
            fontWeight: "bold",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Image src="/Thumb up alt.svg" alt="Thumb up count" width={24} height={24} />
            <span>1.1K</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Image src="/eye.svg" alt="view count" width={24} height={24} />
            <span>3.1K</span>
          </div>
        </GlassBox>
      </div>
      <div style={{ padding: "0 160px" }}>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          신라 자비마립간 13년(470)에, 축조된 충청북도 보은군 오정산에 있는 신라시대 포곡식 석축
          산성.
        </h4>

        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #0033A0",
            borderBottom: "1px solid #0033A0",
            padding: "35px 250px",
            margin: "40px 120px",
          }}
        >
          <span
            style={{
              color: "#0033A0",
              textDecoration: "underline",
            }}
          >
            사진보기
          </span>
          <span
            style={{
              cursor: "pointer",
            }}
          >
            상세정보
          </span>
          <span
            style={{
              cursor: "pointer",
            }}
          >
            기행문
          </span>
          <span
            style={{
              cursor: "pointer",
            }}
          >
            위치
          </span>
          <span
            style={{
              cursor: "pointer",
            }}
          >
            간략후기
          </span>
        </div>

        <div style={{ marginBottom: 40 }}>
          <Swiper
            keyboard
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            slidesPerView={2}
            modules={[Pagination, Navigation, Keyboard]}
            style={{ height: 500 }}
          >
            {exmapleFetchData.images.map((imageInfo, key) => (
              <SwiperSlide key={key}>
                <Image
                  src={imageInfo.image}
                  alt={imageInfo.alt}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className={styles.imageSlide}
                />
              </SwiperSlide>
            ))}

            <div className={styles.slideToContainer}>
              <span className={styles.currentSlideText}>{currentIndex + 1}</span>
              <span className={styles.totalSlideText}>/{exmapleFetchData.images.length}</span>
            </div>

            <button onClick={() => swiper?.slidePrev()} className={styles.slidePrevButton}>
              <Image src="/Arrow_back.svg" alt="arrow_back" width={24} height={24} />
            </button>

            <button onClick={() => swiper?.slideNext()} className={styles.slideNextButton}>
              <Image src="/Arrow_forward.svg" alt="arrow_forward" width={24} height={24} />
            </button>
          </Swiper>
        </div>

        <div style={{ padding: "0 280px" }}>
          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                borderBottom: "7px solid gray",
                paddingBottom: 10,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              상세정보
            </p>

            <span style={{ lineHeight: 1.6 }}>
              보은 삼년산성은 우리나라 대표 석축산성으로 신라 자비마립간 13년 470에 축조되었고
              소지마립간8년486에 대규모로 수리되었다. 이 성은 신라가 서북 지방으로 세력을 확장하는
              데 중요한 전초기지로 사용되었으며, 삼국사기에 축성을 시작한 지 3년 만에 완성되어
              삼년산성이라 부르게 되었다고 기록되어 있다. 이곳은 삼국통일 전쟁 때
              태종무열왕654~661이 당나라 사신 왕문도를 접견하는 장소로 이용되었다. 이후 고려 태조
              왕건918~943이 이성을 점령하려고 하였으나 크게 패하였다.산성 둘레는 1,680m, 최고 높이
              22m, 폭
            </span>
          </div>

          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                borderBottom: "7px solid gray",
                paddingBottom: 10,
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              기행문
              <span style={{ marginLeft: 8, color: "#0033A0" }}>4</span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Table columns={columns} dataSource={dataSource} />
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                borderBottom: "7px solid gray",
                paddingBottom: 10,
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              위치
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div id={`${params.ruinsId}`} />
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                borderBottom: "7px solid gray",
                paddingBottom: 10,
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              참고자료
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                borderBottom: "7px solid gray",
                paddingBottom: 10,
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              간단후기
            </p>

            <div id="editor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuinsInformation;
