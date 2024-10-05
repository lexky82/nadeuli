import { style } from "@vanilla-extract/css";

export const toastContainer = style({
  position: "fixed",
  display: "flex",
  gap: 10,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  top: 100,
  right: -85,
  transform: "translate(-50%, -50%)",
  zIndex: 99,
  maxHeight: "25vh",
  borderRadius: 15,
});

export const toastWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  backgroundColor: "white",
  color: "black",
  padding: 17,
  borderRadius: 15,
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
});

export const toastTitle = style({
  margin: 0,
  marginBottom: 5,
});

export const toastClose = style({
  position: "absolute",
  top: 5,
  right: 3,
  cursor: "pointer",
  border: "none",
  background: "none",
});
