"use client";

import Link from "next/link";
import * as styles from "./account.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { usePathname } from "next/navigation";

const accountRoutes = [
  { title: "계정 관리", path: "/account/accountSetting" },
  { title: "나의 활동", path: "/account/history" },
];

const AccountNav = () => {
  const currentPath = usePathname();

  return (
    <div className={styles.accountNavContainer}>
      <h3 className={styles.accountNavCategory}>내 정보</h3>

      <ul className={styles.accountNavWrapper}>
        {accountRoutes.map((route, i) => {
          return (
            <Link href={route.path} key={i}>
              <li
                style={assignInlineVars({
                  [styles.currentRoute]: route.path === currentPath ? "#0033A033" : "none",
                })}
                className={styles.accountNavRoute}
              >
                {route.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default AccountNav;
