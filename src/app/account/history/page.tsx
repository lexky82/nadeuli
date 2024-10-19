import Tabs from "@/components/Tabs";
import * as accountStyle from "../account.css";
import AccountNav from "../AccountNav";
import EssayHistory from "./EssayHistory";
import CommentHistory from "./CommentHistory";
import * as styles from "./style.css";
import LikedEssay from "./LikedEssay";

const tabItems = [
  { key: 0, label: <p className={styles.tabLabel}>작성한 기행문</p>, children: <EssayHistory /> },
  { key: 1, label: <p className={styles.tabLabel}>작성한 댓글</p>, children: <CommentHistory /> },
  {
    key: 2,
    label: <p className={styles.tabLabel}>좋아요한 기행문</p>,
    children: <LikedEssay />,
  },
];

export const History = () => {
  return (
    <div className={accountStyle.accountPageContainer}>
      <AccountNav />

      <div className={styles.accountPageRight}>
        <h1 className={accountStyle.accountPageTitle}>나의 활동</h1>

        <div className={styles.tabsWrapper}>
          <Tabs items={tabItems} />
        </div>
      </div>
    </div>
  );
};

export default History;
