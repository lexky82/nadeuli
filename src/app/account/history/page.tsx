import Tabs from "@/components/Tabs";
import * as accountStyle from "../account.css";
import AccountNav from "../AccountNav";
import EssayHistory from "./EssayHistory";
import CommentHistory from "./CommentHistory";
import * as styles from "./style.css";

const tabItems = [
  { key: 0, label: <p className={styles.tabLabel}>작성한 기행문</p>, children: <EssayHistory /> },
  { key: 1, label: <p className={styles.tabLabel}>작성한 댓글</p>, children: <CommentHistory /> },
  {
    key: 2,
    label: <p className={styles.tabLabel}>좋아요한 기행문</p>,
    children: <CommentHistory />,
  },
];

export const History = () => {
  return (
    <div className={accountStyle.accountPageContainer} style={{ height: "100vh" }}>
      <AccountNav />

      <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
        <h1 className={accountStyle.accountPageTitle}>나의 활동</h1>

        <div
          style={{
            height: 830,
            width: "100%",
            background: "#fff",
            padding: "45px 65px",
            borderRadius: 15,
            boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
          }}
        >
          <Tabs items={tabItems} />
        </div>
      </div>
    </div>
  );
};

export default History;
