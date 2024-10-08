import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const loginHeading = style({
  display: "flex",
  justifyContent: "center",
  fontWeight: themeVars.fontWeight.large,
  fontSize: 24,
  marginBottom: 45,
});

export const loginFormGlassBox = style({
  display: "flex",
  flexDirection: "column",
  width: 720,
  height: 520,
  padding: 40,
});

export const loginInputWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: 10,
});

export const loginFormWrapper = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const loginForm = style({
  width: "100%",
});

export const loginOptionsWrapper = style({
  display: "flex",
  fontSize: 14,
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 10,
  width: "100%",
});

export const findLinkBox = style({
  display: "flex",
  gap: 5,
  textDecorationLine: "underline",
});

export const autoLoginCheckbox = style({
  display: "flex",
  alignItems: "center",
  gap: 3,
});
