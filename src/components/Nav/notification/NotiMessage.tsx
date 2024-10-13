import Image from "next/image";
import * as styles from "@/styles/components/Nav.css";
import * as notiStyle from "./notifications.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { themeVars } from "@/styles/globalTheme.css";

export interface NotiMessageProps {
  id?: string;
  message?: string;
  date?: string;
  isRead?: boolean;
  isNewNoti?: boolean;
}

export const NotiMessage = ({ id, message, date, isRead, isNewNoti }: NotiMessageProps) => {
  return (
    <div className={notiStyle.notification} id={id}>
      {isNewNoti && <Image src="/NewNoti.svg" width={6} height={6} alt="newNotificatioin" />}

      <Image className={styles.rectIcon} src="/Person.svg" width={40} height={40} alt="profile" />

      <div
        className={notiStyle.notiContentsWrapper}
        style={assignInlineVars({
          [notiStyle.messageIsRead]: isRead ? themeVars.colors.gray : "black",
        })}
      >
        <span className={notiStyle.notiMessage}>{message}</span>
        <span className={notiStyle.notiDate}>{date}</span>
      </div>
    </div>
  );
};
