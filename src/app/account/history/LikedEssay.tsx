import Image from "next/image";
import * as styles from "./style.css";

export const LikedEssay = () => {
  return (
    <div className={styles.EssayHistoryContainer}>
      <ul className={styles.EssayListContainer}>
        <li className={styles.EssayArticleContainer}>
          <div style={{ width: 96, height: 96, background: "#D9D9D9", marginRight: 20 }} />

          <div className={styles.EssayInfoContainer}>
            <h3 className={styles.EssayTitle}>조선 축성술의 최종 진화, 수원화성</h3>

            <span className={styles.EssayContents}>
              수원화성을 다녀왔다. 멋있었다. 역시 조선의 축성술의 마지막 형태라고 하니 그에 맞는
              출중한 모습을 가졌다.....
            </span>

            <div className={styles.EssayStatisticsContainer}>
              <div className={styles.EssayStatistics}>
                <div className={styles.EssayStatisticsInfoContainer}>
                  <Image src="/Thumb_up.svg" alt="좋아요" width={20} height={20} />
                  <span>1.1K</span>
                </div>
                <div className={styles.EssayStatisticsInfoContainer}>
                  <Image src="/eye.svg" alt="조회수" width={20} height={20} />
                  <span>3.1K</span>
                </div>
                <div className={styles.EssayStatisticsInfoContainer}>
                  <Image src="/Comment.svg" width={20} height={20} alt="댓글" />
                  <span>201</span>
                </div>
              </div>

              <div className={styles.EssayOptionContainer}>
                <div className={styles.EssayCreateAt}>2024.10.19 10:46</div>

                <div className={styles.EssayStatisticsInfoContainer}>
                  <div
                    style={{ borderRadius: "50%", background: "#c1c1c1", width: 24, height: 24 }}
                  />
                  <span>으워오</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LikedEssay;
