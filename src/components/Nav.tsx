"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import RectIcon from "./RectIcon";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const routes = [
  { title: "홈", path: "/" },
  { title: "유적지 찾기", path: "/ruinsSearch" },
  { title: "유적지 정보", path: "/ruinsInfo" },
  { title: "기행문", path: "/travelogue" },
];

const NavContainer = styled.nav<{ isScrolling?: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  max-height: 3rem;
  box-shadow: 0px 0.313rem 0.313rem rgba(0, 0, 0, 0.1);
  padding: 0.5rem 2.5rem;
  align-items: center;

  background-color: ${(props) => (props.isScrolling ? "#ffffff" : "inherit")};
`;

const RoutesWrapper = styled.div`
  display: flex;
  margin-right: 15.5rem;
`;

const Route = styled.span<{ primary?: boolean }>`
  color: ${(props) => (props.primary ? props.theme.colors.primary : props.theme.colors.gray)};
  margin-right: 1.125rem;
  font-size: 1.25rem;
`;

const SearchText = styled.input`
  width: 20.3rem;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  padding-right: 3.438rem;
  background-color: white;
  border: none;
  border-radius: 15px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  margin-right: 32rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

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
      <NavContainer isScrolling={scrollY !== 0}>
        <Logo />

        <RoutesWrapper>
          {routes.map((route, key) => {
            return (
              <Link key={key} href={route.path}>
                <Route primary={route.path === currentPath}>{route.title}</Route>
              </Link>
            );
          })}
        </RoutesWrapper>

        <SearchWrapper>
          <SearchText type="text" placeholder="지역이나 유적지를 검색해보세요!" />
          <Image
            src="/Search.svg"
            alt="searchbutton"
            width={24}
            height={24}
            style={{ position: "absolute", right: 25, top: 5, marginLeft: 25 }}
          />
        </SearchWrapper>

        <IconWrapper>
          <RectIcon src="/Ink_pen.svg" width={48} height={48} alt="write" />
          <span style={{ marginRight: 8, marginLeft: 8 }}>|</span>
          <RectIcon src="/Notifications.svg" width={40} height={40} alt="write" />
          <RectIcon src="/Person.svg" width={40} height={40} alt="write" />
        </IconWrapper>
      </NavContainer>
    );
  } else {
    return <div></div>;
  }
}
