import { themeVars } from "@/styles/globalTheme.css";
import { keyframes, style } from "@vanilla-extract/css";

const slideOut = keyframes({
  to: {
    transform: "translateX(0)",
  },
  from: {
    transform: "translateX(-20%)",
  },
});

export const ruinsDetailContainer = style({
  width: 330,
  borderRadius: 15,
  zIndex: 20,
  padding: "10px 0 10px 10px",
  background: "transparent",
  animation: `${slideOut} 0.4s ease-in-out forwards`,
});

export const ruinsDetailWrapper = style({
  backgroundColor: "#fff",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: 15,
});

export const imageSlide = style({
  borderRadius: 15,
});

export const slideToContainer = style({
  position: "absolute",
  top: 20,
  right: 20,
  zIndex: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 3,
  fontSize: 14,
  width: 40,
  height: 15,
  background: "rgba(0, 0, 0, 0.4)",
  borderRadius: 15,
});

export const currentSlideText = style({
  color: themeVars.colors.primary,
});

export const totalSlideText = style({
  color: themeVars.colors.gray,
});

export const slidePrevButton = style({
  position: "absolute",
  top: "40%",
  zIndex: 30,
  left: 30,
  background: "black",
  borderRadius: "50%",
  width: 32,
  height: 32,
  border: "1px solid white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

export const slideNextButton = style({
  position: "absolute",
  top: "40%",
  zIndex: 10,
  right: 30,
  background: "black",
  borderRadius: "50%",
  width: 32,
  height: 32,
  border: "1px solid white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

export const detailContentContainer = style({
  padding: 15,
});

export const detailContentTitle = style({
  marginBottom: 20,
  fontSize: 18,
  fontWeight: 500,
});

export const detailTitleLink = style({
  textDecoration: "underline",
  fontWeight: "normal",
});

export const detailContentType = style({
  color: themeVars.colors.gray,
  fontSize: 13,
});

export const detailFirstContentsWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const thumbupWrapper = style({
  display: "flex",
  alignItems: "center",
  fontSize: 13,
  gap: 3,
});

export const distanceText = style({
  color: themeVars.colors.gray,
  fontSize: 13,
  marginBottom: 20,
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  gap: 10,
  alignItems: "center",
});

export const iconButton = style({
  border: `1px solid ${themeVars.colors.primary}`,
  borderRadius: "50%",
  padding: 8,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const foldingButton = style({
  position: "absolute",
  top: "50%",
  left: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
});

export const closeButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "5%",
  left: "100%",
  width: 32,
  height: 32,
  borderRadius: 5,
  background: "white",
  border: "none",
  cursor: "pointer",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  padding: 0,
});
