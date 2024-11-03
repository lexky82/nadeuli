import { themeVars } from "@/styles/globalTheme.css";
import { createVar, style } from "@vanilla-extract/css";

export const accountNavContainer = style({
  position: "sticky",
  top: "calc(60px + 71px)",
  display: "flex",
  flexDirection: "column",
  padding: 20,
  boxShadow: "0 3px 3px rgba(0,0,0,0.3)",
  width: 300,
  height: 220,
  background: "#fff",
  borderRadius: 15,
});

export const accountNavCategory = style({
  color: "#c1c1c1",
  marginBottom: 0,
  fontSize: 16,
});

export const accountNavWrapper = style({
  paddingLeft: 40,
  display: "flex",
  flexDirection: "column",
  gap: 3,
});

export const currentRoute = createVar();

export const accountNavRoute = style({
  display: "flex",
  alignItems: "center",
  fontSize: 16,
  padding: 10,
  paddingLeft: 30,
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: 8,
  transition: "all 0.1s",
  background: currentRoute,

  ":hover": {
    color: themeVars.colors.primary,
    background: "#0033A033",
  },
});

export const accountPageContainer = style({
  display: "flex",
  justifyContent: "center",
  gap: 60,
  padding: "80px 380px",
  backgroundColor: "#e3e3e3",
});

export const accountPageTitle = style({
  fontSize: 24,
  margin: 0,
});

export const accountSectionTitle = style({
  marginBottom: 10,
  fontSize: 20,
});
