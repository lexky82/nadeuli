"use client";

import Logo from "@/components/Logo";
import LoginForm from "./LoginForm";
import { LoginContainer, LoginFormGalssBox, LoginHeading } from "./style";

const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginFormGalssBox>
        <Logo />
        <LoginHeading>안녕하세요 나들이입니다.</LoginHeading>

        <LoginForm />
      </LoginFormGalssBox>
    </LoginContainer>
  );
};

export default LoginPage;
