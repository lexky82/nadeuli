import { createVar, style } from "@vanilla-extract/css";

export const gridContainer = style({
  padding: 50,
});

export const cardHover = createVar();

export const darkenOverlay = style({
  content: "",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2))",
  zIndex: 1,
  borderRadius: 15,
  transition: "all 1s",
  cursor: "pointer",

  ":hover": {
    background: "rgba(255,255,255,0.1)",
  },
});

export const travelCardInfoWrapper = style({
  textOverflow: "ellipsis",
  overflow: "hidden",
  width: 320,
  position: "absolute",
  left: 20,
  bottom: 20,
  color: "white",
});

export const writerContainer = style({
  display: "flex",
  alignItems: "center",
  gap: 5,
  position: "absolute",
  right: 20,
  color: "white",
  bottom: 20,
});

export const writer = style({
  marginBottom: 2,
});
