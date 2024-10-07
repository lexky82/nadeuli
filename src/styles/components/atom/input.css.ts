import { createVar, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/globalTheme.css";

export const formInputState = createVar();

export const input = style({
  padding: "10px 15px",
  backgroundColor: "#d9d9d9",
  borderRadius: 15,
  transition: "all 0.2s ease",
  outline: "none",
  width: "100%",
  border: `${formInputState} !important`,
  boxSizing: "border-box",

  ":hover": {
    backgroundColor: "#ffffff",
  },

  ":focus": {
    backgroundColor: "#ffffff",
  },

  ":disabled": {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
    opacity: 0.7,
  },
});
