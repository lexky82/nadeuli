import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const ruinsSearchContainer = style({
  display: "flex",
});

export const mapAsideContainer = style({
  display: "flex",
  position: "absolute",
  height: "calc(100vh - 71px)",
  zIndex: 10,
});

export const divider = style({
  background: "#fff",
  boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)",
});

export const asideWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  padding: "20px 0px",
  gap: 10,
  justifyContent: "space-between",
  borderBottom: "1px solid black",
});

export const siteItemWrapper = style({
  textAlign: "center",
  alignItems: "center",
  flex: "1 1 calc(25% - 20px)",
  cursor: "pointer",
});

export const siteIcon = style({
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: "gray",
  margin: "0 auto 8px auto",
});

export const siteText = style({
  width: 32,
});

export const contentsContainer = style({
  padding: 25,
});

export const contentsWrapper = style({
  display: "flex",
  alignItems: "center",
  marginBottom: 20,
});

export const thumbnailImage = style({
  borderRadius: 5,
});

export const contentTitle = style({
  fontSize: 18,
  cursor: "pointer",
});

export const contentLocation = style({
  fontSize: 13,
  color: "#c1c1c1",
});

export const distanceText = style({
  fontSize: 13,
  color: "#c1c1c1",
  fontWeight: "bold",
});

export const travelEssayText = style({
  fontSize: 13,
  fontWeight: "bold",
});
