import { style, createVar } from "@vanilla-extract/css";

export const formFieldContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const formInput = style({
  position: "relative",
  marginTop: 5,
});

export const formInputWrapper = style({
  position: "relative",
});

export const emailVerification = style({
  border: "none",
  background: "none",
  position: "absolute",
  right: 15,
  top: "calc(25% + 5px)",
  color: "blue",
  cursor: "pointer",
  fontSize: 14,
});

export const successVerification = style({
  position: "absolute",
  right: 15,
  top: "calc(25% + 5px)",
  color: "green",
  fontSize: 14,
});

export const fieldErrorMessage = style({
  position: "absolute",
  width: 200,
  height: "80",
  right: -215,
  fontSize: 12,
  top: "calc(25% - 8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#222",
  padding: 3,
  color: "white",
});

export const recomendSignup = style({
  display: "flex",
  gap: 5,
});

export const socialLogin = style({});

export const googleLoginBox = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: 30,
  gap: "25%",
  width: 419,
  backgroundColor: "#d9d9d9",
});

export const orSeparator = style({
  margin: "10px 0",
});

export const submitButton = style({
  borderRadius: 15,
  fontSize: 16,
  height: 40,
  marginBottom: 5,
});
