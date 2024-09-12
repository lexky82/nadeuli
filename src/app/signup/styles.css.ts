import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const signupFormGlassBox = style({
  display: "flex",
  flexDirection: "column",
  width: 720,
  height: 720,
  padding: 40,
});

export const loginHeading = style({
  display: "flex",
  justifyContent: "center",
  fontSize: 24,
  fontWeight: themeVars.fontWeight.large,
  marginBottom: 45,
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
