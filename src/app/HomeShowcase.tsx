"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import * as styles from "@/styles/homeShowcase.css";
import { useState } from "react";
import { Autoplay, Controller } from "swiper/modules";
import Link from "next/link";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const exampleRecomends = [
  {
    title: (
      <div>
        <p>백제의 향기를 담은</p>
        <span>부여 뚜벅이 여행 코스</span>
      </div>
    ),
    image: "/backje.png",
    alt: "백제의 이미지",
    more: "https://naver.com",
    backColor: "#EDFFFF",
  },
  {
    title: (
      <div>
        <p>안동으로 떠나는</p>
        <span>소박한 여행</span>
      </div>
    ),
    image: "/signup_background_image.jpg",
    alt: "백제의 이미지",
    more: "https://naver.com",
    backColor: "#e4d96f",
  },
  {
    title: (
      <div>
        <p>과거의 숨결이 담긴</p>
        <span>박물관 여행</span>
      </div>
    ),
    image: "/login_background_image.jpg",
    alt: "백제의 이미지",
    more: "https://naver.com",
    backColor: "#575757",
  },

  {
    title: (
      <div>
        <p>신라인의 간절함</p>
        <span>삼년산성</span>
      </div>
    ),
    image: "/20221209501200.jpg",
    alt: "백제의 이미지",
    more: "https://naver.com",
    backColor: "#a0a0a0",
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
        speed={1000}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Controller, Autoplay]}
        onSwiper={setFirstSwiper}
        onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
        controller={{ control: secondSwiper }}
        autoplay
        style={{ width: 800 }}
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
        style={{ padding: 40, width: 800, height: 600 }}
      >
        {exampleRecomends.map((recomend, key) => (
          <SwiperSlide key={key}>
            <Image
              src={recomend.image}
              alt={recomend.alt}
              fill
              style={{ objectFit: "fill", borderRadius: 20 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
