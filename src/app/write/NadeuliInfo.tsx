import { Button } from "@/components/atom/Button";
import { themeVars } from "@/styles/globalTheme.css";

const NadeuliInfo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 35,
        padding: "50px 100px",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <label style={{ width: 80 }} htmlFor="title">
          기행문 제목
        </label>

        <input
          required
          type="text"
          name="title"
          id="title"
          style={{
            width: 400,
            height: 24,
            borderRadius: 5,
            borderColor: themeVars.colors.gray,
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <label style={{ width: 80 }} htmlFor="location">
          유적지 위치
        </label>

        <input
          required
          type="text"
          name="location"
          id="location"
          style={{
            width: 400,
            height: 24,
            borderRadius: 5,
            outline: "none",
            borderColor: themeVars.colors.gray,
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        <label style={{ width: 80 }} htmlFor="date">
          방문 날짜
        </label>
        <input
          required
          type="date"
          name="date"
          id="date"
          max={new Date().toISOString().split("T")[0]}
          style={{
            width: 230,
            borderRadius: 5,
            borderColor: themeVars.colors.gray,
            fontWeight: "bold",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
        <label style={{ width: 80 }}>날씨</label>

        <div style={{ display: "flex", gap: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 80,
              fontWeight: "bold",
              border: "1px solid",
              borderColor: themeVars.colors.gray,
              borderRadius: 15,
              cursor: "pointer",
            }}
          >
            맑음
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 80,
              fontWeight: "bold",
              border: "1px solid",
              borderRadius: 15,
              cursor: "pointer",
              borderColor: themeVars.colors.gray,
            }}
          >
            흐림
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 80,
              fontWeight: "bold",
              border: "1px solid",
              borderRadius: 15,
              cursor: "pointer",
              borderColor: themeVars.colors.gray,
            }}
          >
            비
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 80,
              fontWeight: "bold",
              border: "1px solid",
              borderRadius: 15,
              cursor: "pointer",
              borderColor: themeVars.colors.gray,
            }}
          >
            눈
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <label style={{ width: "fit-content" }} htmlFor="visitor">
          방문 인원
        </label>

        <input
          type="number"
          name="visitor"
          id="visitor"
          style={{ width: 50, height: 20 }}
          required
          min={0}
        />
      </div>

      <Button style={{ borderRadius: 5, width: 187, height: 35, marginTop: 35 }}>계속</Button>
    </div>
  );
};

export default NadeuliInfo;
