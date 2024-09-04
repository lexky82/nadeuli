"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import RectIcon from "./RectIcon";

const routes = [
  { title: "홈", path: "/" },
  { title: "유적지 찾기", path: "/ruinsSearch" },
  { title: "유적지 정보", path: "/ruinsInfo" },
  { title: "기행문", path: "/travelogue" },
];

const NavContainer = styled.nav`
  display: flex;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 8px 40px;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-right: 65px;
`;

const RoutesWrapper = styled.div`
  display: flex;
  margin-right: 280px;
`;

const Route = styled.span<{ primary?: boolean }>`
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.gray};
  margin-right: 18px;
  font-size: 20px;
`;

const SearchText = styled.input`
  width: 325px;
  font-size: 16px;
  padding: 8px 12px;
  padding-right: 55px;
  background-color: white;
  border: none;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 8px;
`;

const SearchWrapper = styled.div`
  position: relative;
  margin-right: 480px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  return (
    <NavContainer>
      <LogoWrapper>
        <Image
          src="/logo.svg" // public 디렉토리 내의 파일은 '/' 경로로 시작합니다.
          alt="Logo"
          width={24} // 로고의 가로 크기
          height={24} // 로고의 세로 크기
        />

        <Logo>나들이</Logo>
      </LogoWrapper>

      <RoutesWrapper>
        {routes.map((route, key) => {
          return (
            <Link key={key} href={route.path}>
              <Route>{route.title}</Route>
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
          style={{ position: "absolute", right: 25, top: 8, marginLeft: 25 }}
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
}
