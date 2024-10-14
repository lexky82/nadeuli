import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/globalTheme.css";

export const button = style({
  cursor: "pointer",
  padding: "10px 17px",
  color: "white",
  border: "none",
  backgroundColor: themeVars.colors.primary,
  fontSize: 14,
  fontWeight: 500,
  transition: "background-color 0.15s ease",
  width: "100%",

  ":hover": {
    backgroundColor: themeVars.colors.secondary,
  },

  ":disabled": {
    backgroundColor: themeVars.colors.gray,
    color: "black",
    cursor: "not-allowed",
  },
});
