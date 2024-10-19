import { themeVars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const tabLabel = style({
  padding: 8,
});

export const recordOption = style({
  cursor: "pointer",
  borderRadius: 5,
  padding: 5,

  ":hover": {
    background: themeVars.colors.secondary,
  },
});

export const tabsWrapper = style({
  height: 830,
  width: "100%",
  background: "#fff",
  padding: "45px 65px",
  borderRadius: 15,
  boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
});

export const accountPageRight = style({
  display: "flex",
  flexDirection: "column",
  gap: 30,
  width: "100%",
});

// EssayHistory.tsx
export const EssayHistoryContainer = style({
  paddingTop: 25,
});

export const EssayListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 25,
  padding: 0,
});

export const EssayArticleContainer = style({
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid black",
  paddingBottom: 10,
});

export const EssayInfoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginRight: 30,
});

export const EssayTitle = style({
  fontSize: 18,
  margin: 0,
});

export const EssayContents = style({
  color: "#c1c1c1",
  fontSize: 14,
});

export const EssayStatisticsContainer = style({
  display: "flex",
  justifyContent: "space-between",
});

export const EssayStatistics = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const EssayStatisticsInfoContainer = style({
  display: "flex",
  alignItems: "center",
  gap: 3,
});

export const EssayOptionContainer = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const EssayCreateAt = style({
  color: "#777777",
  fontSize: 14,
});

// CommentHistory.tsx
export const commentHistoryContainer = style({
  padding: 25,
  display: "flex",
  flexDirection: "column",
  gap: 25,
});

export const commentArticleContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const commentContents = style({
  fontWeight: "bold",
  fontSize: 18,
});

export const originalPost = style({
  color: "#777777",
});

export const commentInfoContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const commentThumbUpContainer = style({
  display: "flex",
  alignItems: "center",
});

export const thumbUpCount = style({
  color: "#777777",
  fontSize: 14,
});

export const commentCreateAt = style({
  color: "#777777",
  fontSize: 14,
});
