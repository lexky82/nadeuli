import { themeVars } from "@/styles/globalTheme.css";
import HomeShowcase from "./HomeShowcase";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeShowcase />

      <div style={{ padding: "10px 50px" }}>
        <h3 style={{ color: themeVars.colors.primary }}>추천 유적 관광지</h3>

        <div style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <div
            style={{
              width: 400,
              height: 550,
              borderRadius: 15,
              position: "relative",
              boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              fill
              src="/ruinsTopExampe.jpg"
              alt=""
              style={{ objectFit: "fill", borderRadius: 15 }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "absolute",
                bottom: 0,
                height: 60,
                borderRadius: 15,
                background: "rgba(0,0,0,0.7)",
                width: "calc(100% - 60px)",
                color: "white",
                padding: "5px 30px",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: 16 }}>삼년산성</span>

                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Image src="/Thumb_up.svg" width={18} height={18} alt="좋아요" />
                  <span>423</span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Image src="/Address.svg" width={18} height={18} alt="위치" />
                <span>충청북도, 보은</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
