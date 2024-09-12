import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/globalTheme.css";

export const title = style({
  fontWeight: "bold",
  fontSize: "24px",
  color: themeVars.colors.primary,
  marginLeft: "8px",
});

export const logoWrapper = style({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  marginRight: "65px",
});
