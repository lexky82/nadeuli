import { Button } from "@/components/atom/Button";
import * as styles from "./style.css";
import * as accountStyle from "../account.css";
import Image from "next/image";
import AccountNav from "../AccountNav";

export const AccountSetting = () => {
  return (
    <div className={accountStyle.accountPageContainer}>
      <AccountNav />
      <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
        <h1 className={accountStyle.accountPageTitle}>계정 관리</h1>

        <div>
          <h2 className={accountStyle.accountSectionTitle}>기본 정보</h2>

          <div className={styles.accountInfoContainer}>
            <div className={styles.accountInfoWrapper}>
              <div className={styles.defaultProfileImage} />

              <span className={styles.userNickname}>으워오</span>

              <div className={styles.userEmailWrapper}>
                <span className={styles.userEmail}>lexky82@gmail.com</span>

                <Image src="/validated.svg" alt="email validated" width={24} height={24} />
                <span className={styles.emailValidated}>인증 완료!</span>
              </div>
            </div>

            <Button className={styles.editUserInfoButton}>수정</Button>
          </div>
        </div>

        <div>
          <h2 className={accountStyle.accountSectionTitle}>패스워드</h2>

          <div className={styles.passwordChangeContainer}>
            <div className={styles.passwordChangeWrapper}>
              <p className={styles.passwordChangeContents}>
                <span>최근 업데이트 : </span>
                <span>2024.08.16</span>
              </p>

              <p className={styles.passwordChangeContents}>패스워드</p>
            </div>

            <Button className={styles.passwordChangeButton}>패스워드 변경</Button>
          </div>
        </div>

        <div>
          <h2 className={accountStyle.accountSectionTitle}>계정 연동</h2>

          <div className={styles.socialLoginContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
