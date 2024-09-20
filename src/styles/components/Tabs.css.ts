import { themeVars } from "@/styles/globalTheme.css";
import { style, createVar } from "@vanilla-extract/css";

export const tabLabelWrapper = style({
  display: "flex",
  fontSize: 18,
});

export const activeBackground = createVar();
export const activeBoxShadow = createVar();

export const tabLabel = style({
  display: "flex",
  justifyContent: "center",
  padding: "15px 30px",
  background: activeBackground,
  transition: "all 0.5s",
  width: "100%",
  cursor: "pointer",
  boxShadow: activeBoxShadow,
  userSelect: "none",
});
