import { style } from "@vanilla-extract/css";

export const modalBackdrop = style({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: " rgba(0, 0, 0, 0.5)",
  zIndex: 1000,
});

export const modalContent = style({
  position: "relative",
  padding: 20,
  width: 520,
  backgroundColor: "white",
  borderRadius: 15,
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  zIndex: 1010,
});
