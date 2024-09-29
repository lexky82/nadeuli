import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const signupFormGlassBox = style({
  display: "flex",
  flexDirection: "column",
  width: 720,
  height: 600,
  padding: 40,
});

export const loginHeading = style({
  display: "flex",
  justifyContent: "center",
  fontSize: 24,
  fontWeight: themeVars.fontWeight.large,
  marginBottom: 45,
});

export const signupInputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  width: "100%",
  marginBottom: 20,
});

export const signupFormContainer = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 150px",
});

export const signupSubmit = style({
  marginTop: 15,
});
