import { themeVars } from "@/styles/globalTheme.css";
import { style, createVar } from "@vanilla-extract/css";

export const notiContainer = style({
  position: "relative",
});

export const notiWrapper = style({
  position: "absolute",
  right: "-70%",
  marginTop: 8,
  height: 500,
  background: "D9D9D9",
  width: 350,
  borderRadius: 20,
  outline: "none",
  backgroundColor: "#fff",
  boxShadow: "0 3px 3px rgba(0,0,0,0.3)",
});

export const notiHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 5,
  padding: 25,
});

export const notiheading = style({
  margin: 0,
  fontSize: 20,
});

export const markAsAllButtonWrapper = style({
  display: "flex",
  alignItems: "center",
  color: themeVars.colors.primary,
  gap: 3,
  cursor: "pointer",
  fontSize: 14,
  fontWeight: "bold",
  borderRadius: 10,
  padding: 8,

  ":hover": {
    backgroundColor: "#6D9AFA4D",
  },
});

export const notiListWrapper = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 8,
  padding: "0 10px",
});

export const notification = style({
  display: "flex",
  gap: 8,
  cursor: "pointer",
  padding: 10,
  borderRadius: 15,
  transition: "all 0.1s",

  ":hover": {
    backgroundColor: "#6D9AFA4D",
  },
});

export const messageIsRead = createVar();

export const notiContentsWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  alignItems: "start",
  color: messageIsRead,
});

export const notiMessage = style({
  fontSize: 15,
});

export const notiDate = style({
  fontSize: 14,
  color: themeVars.colors.gray,
});
