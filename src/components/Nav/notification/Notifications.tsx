import Image from "next/image";
import * as styles from "@/styles/components/Nav.css";
import { useState } from "react";
import * as notiStyle from "./notifications.css";
import { NotiMessage, NotiMessageProps } from "./NotiMessage";

interface Notifications {
  messages: NotiMessageProps[];
}

export const Notifications = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleNotiClick = () => {
    setIsVisible(!isVisible);
  };

  const handleAvatarBlur = () => {
    setIsVisible(false);
  };

  return (
    <div onBlur={handleAvatarBlur} tabIndex={0} className={notiStyle.notiContainer}>
      <Image
        className={styles.rectIcon}
        src="/Notifications.svg"
        width={40}
        height={40}
        alt="notifications"
        onClick={handleNotiClick}
      />

      {isVisible && (
        <div className={notiStyle.notiWrapper}>
          <header className={notiStyle.notiHeader}>
            <h3 className={notiStyle.notiheading}>알림</h3>

            <div className={notiStyle.markAsAllButtonWrapper}>
              <Image src="/check.svg" width={20} height={20} alt="mark as all" />
              <span>모두 읽기</span>
            </div>
          </header>

          <div className={notiStyle.notiListWrapper}>
            <NotiMessage
              message='"신라의 영혼" 기행문에 댓글을 작성했습니다.'
              date="10분 전"
              isNewNoti
            />
            <NotiMessage message='"신라의 영혼" 기행문에 댓글을 작성했습니다.' date="10분 전" />
            <NotiMessage
              message='"신라의 영혼" 기행문에 댓글을 작성했습니다.'
              date="10분 전"
              isRead
            />
          </div>
        </div>
      )}
    </div>
  );
};
