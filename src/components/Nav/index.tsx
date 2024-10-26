"use client";

import * as styles from "../../styles/components/Nav.css";
import Link from "next/link";
import Image from "next/image";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Logo from "../atom/Logo";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { UserAvatar } from "./userAvatar/UserAvatar";
import { Notifications } from "./notification/Notifications";
import { useSession } from "next-auth/react";

const routes = [
  { title: "홈", path: "/" },
  { title: "유적지 찾기", path: "/ruinsSearch" },
  { title: "유적지 정보", path: "/ruinsInformation" },
  { title: "기행문", path: "/travelogue" },
];

const noRenderPath = ["/login", "/signup", "/findid", "/findpw"];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const currentPath = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const profileClickHandler = () => {
    router.push("/login");
  };

  if (!noRenderPath.includes(currentPath)) {
    return (
      <header
        className={styles.navContainer}
        style={assignInlineVars({
          [styles.navBackColor]: scrollY !== 0 ? "#fff" : "inherit",
          [styles.navPositon]: currentPath !== "/" ? "sticky" : "fixed",
          [styles.navWidth]: currentPath !== "/" ? "auto" : "calc(100% - 5rem)",
        })}
      >
        <Logo />

        <nav>
          <ul className={styles.routesWrapper}>
            {routes.map((route, key) => {
              return (
                <Link key={key} href={route.path}>
                  <li
                    className={
                      route.path === `/${currentPath.split("/")[1]}`
                        ? styles.primaryRoute
                        : styles.route
                    }
                  >
                    {route.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>

        <div className={styles.searchContainer}>
          <div className={styles.searchBarWrapper}>
            <input
              className={styles.searchText}
              type="text"
              placeholder="지역이나 유적지를 검색해보세요!"
            />
            <Image
              src="/Search.svg"
              alt="searchbutton"
              width={24}
              height={24}
              className={styles.searchIcon}
            />
          </div>
        </div>

        {session ? (
          <div className={styles.iconWrapper}>
            <Image
              className={styles.rectIcon}
              src="/Ink_pen.svg"
              width={48}
              height={48}
              alt="write"
            />
            <span style={{ marginRight: 8, marginLeft: 8 }}>|</span>
            <Notifications />

            <UserAvatar />
          </div>
        ) : (
          <ul className={styles.nonSessionNavWrapper}>
            <Link href="/login">
              <li className={styles.nonSessionRoute}>로그인</li>
            </Link>

            <Link href="/signup">
              <li className={styles.nonSessionRoute}>회원가입</li>
            </Link>
          </ul>
        )}
      </header>
    );
  } else {
    return <div></div>;
  }
}
