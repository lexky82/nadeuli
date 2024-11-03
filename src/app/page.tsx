import { themeVars } from "@/styles/globalTheme.css";
import HomeShowcase from "./HomeShowcase";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeShowcase />

      <div style={{ padding: "0 50px" }}>
        <h3 style={{ color: themeVars.colors.primary }}>추천 유적 관광지</h3>

        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              width: 300,
              height: 400,
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
                padding: "10px 30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>수원화성</span>

                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Image src="/Thumb_up.svg" width={24} height={24} alt="좋아요" />
                  <span>423</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: 15, fontSize: 15 }}>
                <Image src="/Address.svg" width={18} height={18} alt="위치" />
                <span>경기도, 수원</span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 300,
              height: 400,
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
                padding: "10px 30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>수원화성</span>

                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Image src="/Thumb_up.svg" width={24} height={24} alt="좋아요" />
                  <span>423</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: 15, fontSize: 15 }}>
                <Image src="/Address.svg" width={18} height={18} alt="위치" />
                <span>경기도, 수원</span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 300,
              height: 400,
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
                padding: "10px 30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>수원화성</span>

                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Image src="/Thumb_up.svg" width={24} height={24} alt="좋아요" />
                  <span>423</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: 15, fontSize: 15 }}>
                <Image src="/Address.svg" width={18} height={18} alt="위치" />
                <span>경기도, 수원</span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 300,
              height: 400,
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
                padding: "10px 30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>수원화성</span>

                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Image src="/Thumb_up.svg" width={24} height={24} alt="좋아요" />
                  <span>423</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: 15, fontSize: 15 }}>
                <Image src="/Address.svg" width={18} height={18} alt="위치" />
                <span>경기도, 수원</span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 300,
              height: 400,
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
                padding: "10px 30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>수원화성</span>

                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Image src="/Thumb_up.svg" width={24} height={24} alt="좋아요" />
                  <span>423</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: 15, fontSize: 15 }}>
                <Image src="/Address.svg" width={18} height={18} alt="위치" />
                <span>경기도, 수원</span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 300,
              height: 400,
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
                padding: "10px 30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>수원화성</span>

                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Image src="/Thumb_up.svg" width={24} height={24} alt="좋아요" />
                  <span>423</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: 15, fontSize: 15 }}>
                <Image src="/Address.svg" width={18} height={18} alt="위치" />
                <span>경기도, 수원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
