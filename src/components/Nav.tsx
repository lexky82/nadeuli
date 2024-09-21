"use client";

import * as styles from "../styles/components/Nav.css";
import Link from "next/link";
import Image from "next/image";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const routes = [
  { title: "홈", path: "/" },
  { title: "유적지 찾기", path: "/ruinsSearch" },
  { title: "유적지 정보", path: "/ruinsInformation" },
  { title: "기행문", path: "/travelogue" },
];

const noRenderPath = ["/login", "/signup", "/findid", "/findpw"];

export default function Navbar() {
  const currentPath = usePathname();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!noRenderPath.includes(currentPath)) {
    return (
      <nav
        className={styles.navContainer}
        style={assignInlineVars({
          [styles.navBackColor]: scrollY !== 0 ? "#fff" : "inherit",
          [styles.navPositon]: currentPath !== "/" ? "sticky" : "fixed",
          [styles.navWidth]: currentPath !== "/" ? "auto" : "calc(100% - 5rem)",
        })}
      >
        <Logo />

        <ul className={styles.routesWrapper}>
          {routes.map((route, key) => {
            return (
              <Link key={key} href={route.path}>
                <span className={route.path === currentPath ? styles.primaryRoute : styles.route}>
                  {route.title}
                </span>
              </Link>
            );
          })}
        </ul>

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

        <div className={styles.iconWrapper}>
          <Image
            className={styles.rectIcon}
            src="/Ink_pen.svg"
            width={48}
            height={48}
            alt="write"
          />
          <span style={{ marginRight: 8, marginLeft: 8 }}>|</span>
          <Image
            className={styles.rectIcon}
            src="/Notifications.svg"
            width={40}
            height={40}
            alt="write"
          />
          <Image className={styles.rectIcon} src="/Person.svg" width={40} height={40} alt="write" />
        </div>
      </nav>
    );
  } else {
    return <div></div>;
  }
}
