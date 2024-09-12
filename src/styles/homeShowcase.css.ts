import { createVar, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/globalTheme.css";

export const sliderHeading = style({
  fontSize: 32,
});

export const more = style({
  margin: 0,
  textDecorationLine: "underline",
  color: themeVars.colors.gray,
});

export const msCaseBackColor = createVar();

export const mainShowcase = style({
  display: "flex",
  justifyContent: "center",
  transition: "all 1.5s",
  paddingTop: 65,
  backgroundColor: msCaseBackColor,
});
