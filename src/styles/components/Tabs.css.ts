import { themeVars } from "@/styles/globalTheme.css";
import { style, createVar } from "@vanilla-extract/css";

export const tabLabelWrapper = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  fontSize: 18,
});

export const activeColor = createVar();

export const tabLabel = style({
  cursor: "pointer",
  userSelect: "none",
  color: activeColor,

  ":hover": {
    color: themeVars.colors.primary,
  },
});

export const tabsIndicator = style({
  position: "absolute",
  bottom: 0,
  width: 80,
  height: 2,
  background: themeVars.colors.primary,
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
});
