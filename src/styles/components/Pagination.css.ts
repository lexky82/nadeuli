import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/globalTheme.css";

export const moveToPageButton = style({
  cursor: "pointer",
  fontSize: 12,
  width: 42,
  height: 24,
  padding: "2px 8px",
  background: themeVars.colors.gray,
  borderRadius: 4,
});

export const paginationWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 262,
  marginRight: 26,
});

export const paginationChip = style({
  cursor: "pointer",
  padding: "4px 8px",
  borderRadius: 4,
  backgroundColor: "none",
  ":hover": {
    backgroundColor: themeVars.colors.gray,
  },
  ":focus": {
    color: "white",
    backgroundColor: themeVars.colors.primary,
  },
});

export const paginationChipActive = style({
  backgroundColor: themeVars.colors.primary,
  color: "white",
});

export const moveToPageNumber = style({
  width: 38,
  height: 24,
  color: themeVars.colors.gray,
  marginRight: 6,
});

export const moveWrapper = style({
  display: "flex",
});

export const paginationContainer = style({
  display: "flex",
  alignItems: "center",
});
