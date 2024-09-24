"use client";

import { Pagination, Navigation, Keyboard } from "swiper/modules";
import * as styles from "../../../ruinsSearch/ruinsDetail.style.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { exmapleFetchData } from "@/utils/exampleData";
import Image from "next/image";

export const ImageSlide = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <Swiper
      keyboard
      onSwiper={(swiper) => setSwiper(swiper)}
      slidesPerView={2}
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

      <button onClick={() => swiper?.slidePrev()} className={styles.slidePrevButton}>
        <Image src="/Arrow_back.svg" alt="arrow_back" width={24} height={24} />
      </button>

      <button onClick={() => swiper?.slideNext()} className={styles.slideNextButton}>
        <Image src="/Arrow_forward.svg" alt="arrow_forward" width={24} height={24} />
      </button>
    </Swiper>
  );
};
