import { GlassBox } from "@/components/atom/GlassBox";
import Image from "next/image";

interface Params {
  params: {
    ruinsId: number;
  };
}

const RuinsInformation = ({ params }: Params) => {
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
            fontSize: 32,
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

      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        신라 자비마립간 13년(470)에, 축조된 충청북도 보은군 오정산에 있는 신라시대 포곡식 석축 산성.
      </h4>

      <div
        style={{
          fontSize: 24,
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
    </div>
  );
};

export default RuinsInformation;
