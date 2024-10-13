import { themeVars } from "@/styles/globalTheme.css";
import { style, createVar } from "@vanilla-extract/css";

export const userAvatarContainer = style({
  position: "relative",
});

export const profileContainer = style({
  position: "absolute",
  right: "-70%",
  marginTop: 8,
  height: 350,
  background: "D9D9D9",
  width: 250,
  borderRadius: 20,
  outline: "none",
  backgroundColor: "#8a8a8a",
  boxShadow: "0 3px 3px rgba(0,0,0,0.3)",
  color: "white",
});

export const profileWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  gap: 10,
  padding: "30px 55px",
  fontSize: 14,
});

export const defaultProfileImage = style({
  borderRadius: "50%",
  width: 82,
  height: 82,
  background: "#fff",
});

export const userEmail = style({
  color: "#DFDADA",
});

export const profileNavWrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  fontSize: 14,
});

export const profileNav = style({
  display: "flex",
  gap: 8,
  width: "100%",
  justifyContent: "center",
  height: 35,
  alignItems: "center",
  cursor: "pointer",
  fontWeight: 300,
  transition: "all 0.2s",

  ":hover": {
    backgroundColor: themeVars.colors.secondary,
  },
});

export const logout = style({
  marginTop: 10,

  ":hover": {
    backgroundColor: "red",
  },
});
