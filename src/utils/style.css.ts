import { themeVars } from "@/styles/globalTheme.css";
import { createVar, style } from "@vanilla-extract/css";

export const label = style({
  display: "flex",
  justifyContent: "center",
  padding: "8px 15px",
  transition: "all 0.2s",
});
