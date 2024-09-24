import { style, createVar } from "@vanilla-extract/css";

export const tableColumn = style({
  fontSize: 20,
  padding: 5,
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const tableRow = style({
  textAlign: "center",
  padding: 5,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
