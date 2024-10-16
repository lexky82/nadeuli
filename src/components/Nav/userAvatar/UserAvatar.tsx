"use client";

import { useState } from "react";
import Image from "next/image";
import * as styles from "@/styles/components/Nav.css";
import * as avatarStyles from "./userAvatar.css";
import { signOutWithForm } from "@/app/serverActions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const UserAvatar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const router = useRouter();

  const handleAvatarClick = () => {
    setIsVisible(!isVisible);
  };

  const handleAvatarBlur = () => {
    setIsVisible(false);
  };

  const handleLogoutClick = () => {
    signOutWithForm().then(() => {
      window.location.reload();
    });
  };

  const handleRouteClick = (route: string) => {
    router.push(route);
    setIsVisible(false);
  };

  return (
    <div className={avatarStyles.userAvatarContainer} onBlur={handleAvatarBlur} tabIndex={0}>
      <Image
        className={styles.rectIcon}
        src="/Person.svg"
        width={40}
        height={40}
        alt="profile"
        onClick={handleAvatarClick}
      />

      {isVisible && (
        <div className={avatarStyles.profileContainer}>
          <div className={avatarStyles.profileWrapper}>
            <div className={avatarStyles.defaultProfileImage} />

            <div>
              <p>으워오</p>
              <p className={avatarStyles.userEmail}>lexky82@gmail.com</p>
            </div>
          </div>

          <div className={avatarStyles.profileNavWrapper}>
            <div
              className={avatarStyles.profileNav}
              onClick={() => handleRouteClick("/account/accountSetting")}
            >
              <Image src="/Account_manage.svg" alt="manage_profile" width={24} height={24} />
              <span>계정관리</span>
            </div>
            <div
              className={avatarStyles.profileNav}
              onClick={() => handleRouteClick("/account/history")}
            >
              <Image src="/history.svg" alt="my_history" width={24} height={24} />
              <span>나의 활동</span>
            </div>

            <div
              className={`${avatarStyles.profileNav} ${avatarStyles.logout}`}
              onClick={handleLogoutClick}
            >
              <Image src="/logout.svg" alt="logout" width={24} height={24} />
              <span>로그아웃</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
