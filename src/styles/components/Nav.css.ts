import { createVar, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/globalTheme.css";

export const navBackColor = createVar();

export const navContainer = style({
  display: "flex",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 999,
  maxHeight: "3rem",
  boxShadow: "0px 0.313rem 0.313rem rgba(0, 0, 0, 0.1)",
  padding: "0.5rem 2.5rem",
  alignItems: "center",

  backgroundColor: navBackColor,
});

export const routesWrapper = style({
  display: "flex",
  marginRight: "15.5rem",
});

export const route = style({
  color: themeVars.colors.gray,
  marginRight: "1.125rem",
  fontSize: "1.25rem",
});

export const primaryRoute = style({
  color: themeVars.colors.primary,
  marginRight: "1.125rem",
  fontSize: "1.25rem",
});

export const searchText = style({
  width: "20.3rem",
  fontSize: "1rem",
  padding: "0.5rem 0.75rem",
  paddingRight: "3.438rem",
  backgroundColor: "white",
  border: "none",
  borderRadius: 15,

  ":focus": {
    outline: `1px solid ${themeVars.colors.primary}`,
  },
});

export const searchWrapper = style({
  position: "relative",
  marginRight: "32rem",
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const rectIcon = style({
  cursor: "pointer",
  marginRight: 8,
});

export const searchIcon = style({
  position: "absolute",
  right: 25,
  top: "0.4rem",
  marginLeft: 25,
});
