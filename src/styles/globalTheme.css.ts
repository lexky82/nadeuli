import { createTheme, globalStyle } from "@vanilla-extract/css";

export const [themeClass, themeVars] = createTheme({
  colors: {
    primary: "#0033A0",
    secondary: "#6D9AFA",
    gray: "#C1C3C3",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    large: "700",
  },
});

globalStyle("html, body", {
  fontFamily: "Noto Sans KR",
  margin: 0,
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("input", {
  fontFamily: "Noto Sans KR",
  fontSize: 16,
});

globalStyle("input::placeholder", {
  color: "#C1C3C3",
});
