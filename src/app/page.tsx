"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { styled } from "styled-components";

const exampleRecomends = [
  {
    title: "백제의 향기를 담은\n 부여 뚜벅이 여행 코스",
    image: "/backje.png",
    alt: "백제의 이미지",
    more: "https://naver.com",
    backColor: "#EDFFFF",
  },
  {
    title: "백제의 향기를 담은\n 부여 뚜벅이 여행 코스",
    image: "/backje.png",
    alt: "백제의 이미지",
    more: "https://naver.com",
    backColor: "#EDFFFF",
  },
];

const SliderHeading = styled.h3`
  font-size: 32px;
`;

const More = styled.p``;

export default function Home() {
  return (
    <Swiper
      spaceBetween={20} // 슬라이드 간의 간격
      slidesPerView={1} // 한 화면에 1개의 슬라이드만 보여줌
      direction="horizontal" // 슬라이드 방향 가로로 설정
      loop={true} // 슬라이드 무한 반복
      style={{ padding: 40 }}
    >
      {exampleRecomends.map((recomend, key) => (
        <SwiperSlide key={key}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <SliderHeading>백제의 향기를 담은 부여 뚜벅이 여행 코스</SliderHeading>
              <More>자세히 보기</More>
            </div>

            <Image src={recomend.image} alt={recomend.alt} width={400} height={300} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
