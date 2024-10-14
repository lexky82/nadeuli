import Link from "next/link";
import * as styles from "./account.css";

const accountRoutes = [
  { title: "계정 관리", path: "/account/accountSetting" },
  { title: "나의 활동", path: "/account/history" },
];

const AccountNav = () => {
  return (
    <div className={styles.accountNavContainer}>
      <h3 className={styles.accountNavCategory}>내 정보</h3>

      <ul className={styles.accountNavWrapper}>
        {accountRoutes.map((route, i) => {
          return (
            <li key={i} className={styles.accountNavRoute}>
              <Link href={route.path}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccountNav;
