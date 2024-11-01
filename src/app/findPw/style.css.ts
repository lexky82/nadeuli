import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const findIdGlassBox = style({
  display: "flex",
  flexDirection: "column",
  width: 720,
  height: 520,
  padding: 40,
});

export const findPwFormContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 25,
  width: 419,
});

export const changePwFormContainer = style({
  display: "flex",
  width: 419,
  flexDirection: "column",
  gap: 10,
});

export const ChangePwButton = style({
  marginTop: 15,
});
