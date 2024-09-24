import { columns, dataSource } from "@/utils/exampleData";
import { GlassBox } from "@/components/atom/GlassBox";
import Image from "next/image";
import { Table } from "@/components/Table";
import { Chapter } from "./clientComponents/Chapter";
import { ScrollComponent } from "./clientComponents/ScrollComponent";
import { ImageSlide } from "./clientComponents/ImageSlide";
import { Location } from "./clientComponents/Location";

interface Params {
  params: {
    ruinsId: number;
  };
}

const RuinsInformation = ({ params }: Params) => {
  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "400px" }} id="top">
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

        <ScrollComponent />

        <div style={{ marginBottom: 40 }} id="images">
          <ImageSlide />
        </div>

        <div style={{ padding: "0 280px" }}>
          <Chapter id="detailInfo" title="상세정보">
            <span style={{ lineHeight: 1.6 }}>
              보은 삼년산성은 우리나라 대표 석축산성으로 신라 자비마립간 13년 470에 축조되었고
              소지마립간8년486에 대규모로 수리되었다. 이 성은 신라가 서북 지방으로 세력을 확장하는
              데 중요한 전초기지로 사용되었으며, 삼국사기에 축성을 시작한 지 3년 만에 완성되어
              삼년산성이라 부르게 되었다고 기록되어 있다. 이곳은 삼국통일 전쟁 때
              태종무열왕654~661이 당나라 사신 왕문도를 접견하는 장소로 이용되었다. 이후 고려 태조
              왕건918~943이 이성을 점령하려고 하였으나 크게 패하였다.산성 둘레는 1,680m, 최고 높이
              22m, 폭
            </span>
          </Chapter>

          <Chapter id="essay" title={`기행문(${dataSource.length})`}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Table columns={columns} dataSource={dataSource} />
            </div>
          </Chapter>

          <Chapter id="location" title="위치">
            <Location mapId={`${params.ruinsId}`} />
          </Chapter>

          <Chapter id="references" title="참고자료"></Chapter>

          <Chapter id="review" title="간단후기">
            <div id="editor" />
          </Chapter>
        </div>
      </div>
    </div>
  );
};

export default RuinsInformation;
