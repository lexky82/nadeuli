import { style } from "@vanilla-extract/css";

export const formFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const formInput = style({
  marginBottom: 10,
  marginTop: 5,
});

export const fieldErrorMessage = style({
  position: "absolute",
  width: 180,
  height: 50,
  right: -10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: "white",
  padding: 10,
  borderRadius: 30,
});

export const recomendSignup = style({
  display: "flex",
  gap: 5,
  marginBottom: 15,
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
