import { style } from "@vanilla-extract/css";

export const glassBox = style({
  background: "rgba(255, 255, 255, 0.4)",
  borderRadius: 15,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", // 사파리 지원
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
});
