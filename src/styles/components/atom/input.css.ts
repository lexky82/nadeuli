import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/globalTheme.css";

export const input = style({
  height: 24,
  padding: "10px 15px",
  backgroundColor: "#d9d9d9",
  borderRadius: 15,
  transition: "background-color 0.1s ease",
  outline: "none",
  border: `1px solid ${themeVars.colors.gray}`,

  ":focus": {
    backgroundColor: "#ffffff",
    outline: `1px solid ${themeVars.colors.primary}`,
  },
});
