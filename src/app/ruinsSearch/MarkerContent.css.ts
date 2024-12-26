import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
});

export const mapPin = style({
  width: "18px",
  height: "20px",
  backgroundColor: "white",
  border: "2px solid",
  borderColor: themeVars.colors.primary,
  borderRadius: "50%", // 원형
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold", // 텍스트 굵기
});

export const mapPinAfter = style({
  position: "absolute",
  bottom: "-7px", // 삼각형 위치
  left: "50%",
  transform: "translateX(-50%)",
  width: 0,
  height: 0,
  borderLeft: "7px solid transparent", // 삼각형 왼쪽
  borderRight: "7px solid transparent", // 삼각형 오른쪽
  borderTop: `9px solid ${themeVars.colors.primary}`, // 삼각형 위쪽 (색상)
});
