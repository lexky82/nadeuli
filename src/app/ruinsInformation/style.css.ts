import { style } from "@vanilla-extract/css";

export const ruinsInformationContainer = style({
  display: "flex",
  justifyContent: "center",
  height: "calc(80vh - 71px)",
  position: "absolute",
  top: "40%",
  left: "50%",
  right: "50%",
});

export const searchInput = style({
  border: "none",
  width: 480,
  height: 40,
  outline: "none",
  marginBottom: 3,

  "::placeholder": {
    color: "#777777",
  },
});

export const searchInputContainer = style({
  position: "relative",
  height: 30,
  padding: "10px 18px",
  border: "1px solid #777777",
  display: "flex",
  alignItems: "center",
  borderRadius: 15,
  boxShadow: "0 3px 3px rgba(0,0,0,0.3)",
  gap: 24,

  transition: "all 0.3s",
});

export const expandedSearchInput = style({
  border: "none",
  width: 480,
  height: 480,
  outline: "none",
  marginBottom: 3,

  "::placeholder": {
    color: "#777777",
  },
});
