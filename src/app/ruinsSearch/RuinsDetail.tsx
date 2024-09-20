import React, { useState } from "react";
import * as styles from "./ruinsDetail.style.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Tabs from "@/components/Tabs";
import { TabData, exmapleFetchData } from "../exampleData";

interface RuinsDetailProps {
  ruinsId: number | null;
  closeDetailPanel: () => void;
}

const RuinsDetail = ({ ruinsId, closeDetailPanel }: RuinsDetailProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabChange = (index: number) => {
    console.log(index);
  };

  return (
    <div className={styles.ruinsDetailContainer}>
      <div className={styles.ruinsDetailWrapper}>
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          spaceBetween={20}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
        >
          {exmapleFetchData.images.map((imageInfo, key) => (
            <SwiperSlide key={key}>
              <Image
                src={imageInfo.image}
                alt={imageInfo.alt}
                width={330}
                height={195}
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

        <div className={styles.detailContentContainer}>
          <div className={styles.detailFirstContentsWrapper}>
            <p className={styles.detailContentType}>{exmapleFetchData.type}</p>

            <div className={styles.thumbupWrapper}>
              <Image src="/Thumb_up.svg" alt="Thumb_up" width={16} height={16} />
              <span>1,515</span>
            </div>
          </div>

          <Link href={exmapleFetchData.viewDetail} className={styles.detailTitleLink}>
            <p className={styles.detailContentTitle}>삼년산성</p>
          </Link>

          <p>{exmapleFetchData.location}</p>
          <p className={styles.distanceText}>{exmapleFetchData.fromMyLocation}km</p>

          <div className={styles.buttonContainer}>
            <div className={styles.iconButton}>
              <Image src="/Directions.svg" alt="direction" width={20} height={20} />
            </div>
            <div className={styles.iconButton}>
              <Image src="/Thumb_up.svg" alt="Thumb_up" width={20} height={20} />
            </div>
          </div>
        </div>

        <Tabs onChange={handleTabChange} items={TabData} />
      </div>

      <button className={styles.foldingButton} onClick={closeDetailPanel}>
        <Image src="/folding_button.svg" alt="foldbutton" width={21} height={41} />
      </button>

      <button className={styles.closeButton} onClick={closeDetailPanel}>
        <Image src="/Close.svg" alt="Detail_close" width={20} height={20} />
      </button>
    </div>
  );
};

export default RuinsDetail;
