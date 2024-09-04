import styled from "styled-components";
import Image from "next/image";

const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 8px;
`;

const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-right: 65px;
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <Image
        src="/logo.svg" // public 디렉토리 내의 파일은 '/' 경로로 시작합니다.
        alt="Logo"
        width={32} // 로고의 가로 크기
        height={32} // 로고의 세로 크기
      />

      <Title>나들이</Title>
    </LogoWrapper>
  );
}
