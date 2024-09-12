import { style } from "@vanilla-extract/css";

export const separator = style({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  "::before": {
    content: "",
    flex: 1,
    borderBottom: "1px solid black",
    margin: "0 10px",
  },
  "::after": {
    content: '""',
    flex: 1,
    borderBottom: "1px solid black",
    margin: "0 10px",
  },
});

export const child = style({
  whiteSpace: "nowrap",
});
