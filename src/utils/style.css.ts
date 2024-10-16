import { themeVars } from "@/styles/globalTheme.css";
import { createVar, style } from "@vanilla-extract/css";

export const label = style({
  display: "flex",
  justifyContent: "center",
  padding: "15px 30px",
  transition: "all 0.2s",

  ":hover": {
    background: themeVars.colors.secondary,
  },
});
