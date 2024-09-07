"use client";

import Logo from "@/components/Logo";
import LoginForm from "./LoginForm";
import { LoginContainer, LoginFormGlassBox, LoginHeading } from "./style";

const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginFormGlassBox>
        <Logo />
        <LoginHeading>안녕하세요 나들이입니다.</LoginHeading>

        <LoginForm />
      </LoginFormGlassBox>
    </LoginContainer>
  );
};

export default LoginPage;
