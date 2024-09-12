"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import * as styles from "@/styles/homeShowcase.css";
import { useState } from "react";
import { Controller } from "swiper/modules";
import Link from "next/link";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const exampleRecomends = [
  {
    title: "백제의 향기를 담은\n 부여 뚜벅이 여행 코스",
    image: "/backje.png",
    alt: "백제의 이미지",
    more: "https://naver.com",
    backColor: "#EDFFFF",
  },
  {
    title: "백제의 향기를 ㄹㅇㄹㅇㄹ\n 부여 뚜벅이 여행 코스",
    image: "/backje.png",
    alt: "백제의 이미지",
    more: "https://naver.com",
    backColor: "#ffeaaa",
  },
];

export default function HomeShowcase() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className={styles.mainShowcase}
      style={assignInlineVars({
        [styles.msCaseBackColor]: exampleRecomends && exampleRecomends[currentIndex].backColor,
      })}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Controller]}
        onSwiper={setFirstSwiper}
        onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
        controller={{ control: secondSwiper }}
      >
        {exampleRecomends.map((recomend, key) => (
          <SwiperSlide key={key}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: 500,
                alignItems: "center",
              }}
            >
              <div>
                <h3 className={styles.sliderHeading}>{recomend.title}</h3>
                <Link href={recomend.more}>
                  <p className={styles.more}>자세히보기</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Controller]}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
        spaceBetween={15}
        slidesPerView={1}
        style={{ padding: 40 }}
      >
        {exampleRecomends.map((recomend, key) => (
          <SwiperSlide key={key}>
            <Image src={recomend.image} alt={recomend.alt} width={700} height={500} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
