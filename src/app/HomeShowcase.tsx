"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { styled } from "styled-components";
import { useState } from "react";
import { Controller } from "swiper/modules";
import Link from "next/link";

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

const SliderHeading = styled.h3`
  font-size: 32px;
`;

const More = styled.p`
  margin: 0;
  text-decoration-line: underline;
  color: ${(props) => props.theme.colors.gray};
`;

const MainShowcase = styled.div<{ backColor?: string }>`
  display: flex;
  justify-content: center;
  background: ${(props) => props.backColor};
  transition: all 1.5s;
  padding-top: 65px;
`;

export default function HomeShowcase() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <MainShowcase backColor={exampleRecomends && exampleRecomends[currentIndex].backColor}>
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
                <SliderHeading>{recomend.title}</SliderHeading>
                <Link href={recomend.more}>
                  <More>자세히보기</More>
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
    </MainShowcase>
  );
}
