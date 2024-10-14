import { createVar, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/globalTheme.css";

export const navBackColor = createVar();
export const navPositon = createVar();
export const navWidth = createVar();

export const navContainer = style({
  display: "flex",
  zIndex: 999,
  justifyContent: "space-between",
  boxShadow: "0px 0.313rem 0.313rem rgba(0, 0, 0, 0.1)",
  padding: "0.5rem 2.5rem",
  alignItems: "center",
  backgroundColor: navBackColor,

  position: navPositon,
  top: 0,
  width: navWidth,
});

export const routesWrapper = style({
  display: "flex",
  gap: 18,
});

export const route = style({
  color: themeVars.colors.gray,
  fontSize: "1.25rem",

  ":hover": {
    color: themeVars.colors.primary,
  },
});

export const primaryRoute = style({
  color: themeVars.colors.primary,
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

export const searchContainer = style({
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,
});

export const searchBarWrapper = style({
  position: "relative",
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

export const nonSessionNavWrapper = style({
  display: "flex",
  gap: 20,
  cursor: "pointer",
});

export const nonSessionRoute = style({
  color: "black",

  ":hover": {
    color: themeVars.colors.primary,
  },
});
