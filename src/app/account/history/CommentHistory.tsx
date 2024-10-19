import Image from "next/image";
import * as styles from "./style.css";

export const CommentHistory = () => {
  return (
    <div className={styles.commentHistoryContainer}>
      <div className={styles.commentArticleContainer}>
        <span className={styles.commentContents}>
          저도 이곳 저곳은 다녀봤지만 이 곳만큼 인상적인 곳은 없었습니다.
        </span>
        <span className={styles.originalPost}>삼년산성, 신라의 최후의 보루</span>
        <div className={styles.commentInfoContainer}>
          <div className={styles.commentThumbUpContainer}>
            <Image src="/Thumb_up.svg" alt="좋아요" width={16} height={16} />
            <span className={styles.thumbUpCount}>12</span>
          </div>

          <span className={styles.commentCreateAt}>1시간 전</span>
        </div>
      </div>
    </div>
  );
};

export default CommentHistory;
