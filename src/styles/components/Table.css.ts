import { style, createVar } from "@vanilla-extract/css";

export const tableColumn = style({
  fontSize: 18,
  padding: 5,
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const tableBodyWrapper = style({
  fontSize: 14,
});

export const tableRow = style({
  textAlign: "center",
  padding: 5,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
