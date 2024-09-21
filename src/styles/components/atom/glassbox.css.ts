import { style } from "@vanilla-extract/css";

export const glassBox = style({
  background: "rgba(255, 255, 255, 0.3)",
  borderRadius: 15,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // 사파리 지원
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
});
