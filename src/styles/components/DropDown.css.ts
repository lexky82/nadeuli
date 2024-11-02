import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const dropdownWrapper = style({
  position: "relative",
  display: "inline-block",
});

export const dropdownButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "black",
  background: "white",
  gap: 10,
  width: 100,
  fontWeight: 500,
  padding: "3px 10px",
  cursor: "pointer",
  marginBottom: 5,
  border: "1px solid",
  borderRadius: 5,
  borderColor: themeVars.colors.gray,
  transition: "all 0.3s",

  ":hover": {
    borderColor: themeVars.colors.primary,
  },
});

export const dropdownContent = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
  alignItems: "center",
  gap: 3,
  padding: "10px 0",
  position: "absolute",
  backgroundColor: "white",
  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
  zIndex: 1,
  borderRadius: "4px",
});

export const showDropdown = style({
  display: "block",
});
