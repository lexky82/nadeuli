import { themeVars } from "@/styles/globalTheme.css";
import { style, createVar } from "@vanilla-extract/css";

export const tabLabelWrapper = style({
  display: "flex",
  fontSize: 18,
});

export const activeBackground = createVar();
export const activeBoxShadow = createVar();

export const tabLabel = style({
  cursor: "pointer",
  userSelect: "none",
});
