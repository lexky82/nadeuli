import { GlassBox } from "@/components/atom/GlassBox";
import Image from "next/image";
import * as styles from "./style.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps {
  id?: number;
  imageSrc: string | StaticImport;
  title: string;
  createAt: string;
  thumbsUp: number;
  view: number;
  comment: number;
  location: string;
  writer: string;
}

const Card = ({
  id,
  imageSrc,
  title,
  createAt,
  thumbsUp,
  view,
  comment,
  location,
  writer,
}: CardProps) => {
  return (
    <div
      style={{
        width: "250px",
        margin: "0 auto",
      }}
    >
      <div className={styles.darkenOverlay} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Image
          fill
          src={`https://naver.github.io/egjs-infinitegrid/assets/image/${
            (Number(imageSrc) % 33) + 1
          }.jpg`}
          alt=""
          style={{ objectFit: "fill", borderRadius: 15 }}
        />

        <GlassBox
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            padding: "5px 10px",
            fontWeight: "bold",
            zIndex: 9,
            fontSize: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Image src="/Thumb up alt.svg" alt="좋아요 수" width={18} height={18} />
            <span>{thumbsUp}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Image src="/eye.svg" alt="조회수" width={18} height={18} />
            <span>{view}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Image src="/comment.svg" alt="댓글수" width={18} height={18} />
            <span>{comment}</span>
          </div>
        </GlassBox>

        <div style={{ position: "absolute", right: 20, top: 20 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "white" }} />
          <Image
            src="/ArrowRight.svg"
            width={24}
            height={24}
            alt="이동"
            style={{
              position: "absolute",
              top: 4,
              right: 4,
            }}
          />
        </div>
      </div>

      <div className={styles.tranvelCardInfoWrapper}>
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{createAt}</p>
      </div>

      <div className={styles.writer}>
        <div
          style={{
            width: 24,
            height: 24,
            background: "#777",
            borderRadius: "50%",
          }}
        />
        <span>{writer}</span>
      </div>
    </div>
  );
};

export default Card;
