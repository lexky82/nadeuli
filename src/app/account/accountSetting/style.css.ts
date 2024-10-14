import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const defaultProfileImage = style({
  borderRadius: "50%",
  width: 150,
  height: 150,
  background: "#c1c1c1",
});

export const accountInfoContainer = style({
  display: "flex",
  justifyContent: "center",
  height: 315,
  background: "#fff",
  borderRadius: 15,
  boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
  position: "relative",
});

export const accountInfoWrapper = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: 15,
});

export const userNickname = style({
  fontWeight: "bold",
  fontSize: 18,
});

export const userEmailWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 5,
});

export const userEmail = style({
  color: "#0033A0",
  marginRight: 10,
});

export const emailValidated = style({
  color: "#34A853",
  fontWeight: 300,
  fontSize: 14,
});

export const editUserInfoButton = style({
  width: 80,
  height: 40,
  borderRadius: 5,
  position: "absolute",
  right: 20,
  bottom: 20,
});

export const passwordChangeContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
  padding: "15px 25px",
  height: 100,
  background: "#fff",
  borderRadius: 15,
  boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
});

export const passwordChangeWrapper = style({
  display: "flex",
  gap: 10,
  flexDirection: "column",
});

export const passwordChangeContents = style({
  margin: 0,
});

export const passwordChangeButton = style({
  width: 100,
  height: 40,
  fontSize: 11,
  borderRadius: 5,
});

export const socialLoginContainer = style({
  height: 480,
  background: "#fff",
  borderRadius: 15,
  boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
});
