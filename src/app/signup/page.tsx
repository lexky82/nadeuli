"use client";

import styled from "styled-components";
import { SignupContainer } from "./style";
import GlassBox from "@/components/atom/GlassBox";
import Logo from "@/components/Logo";
import Heading from "@/components/atom/Heading";
import SignupForm from "./SignupForm";

const SignupFormGlassBox = styled(GlassBox)`
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 720px;
  padding: 40px;
`;

export const LoginHeading = styled(Heading)`
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 45px;
`;

const SignupPage = () => {
  return (
    <SignupContainer>
      <SignupFormGlassBox>
        <Logo />
        <LoginHeading>환영합니다. 나들이입니다.</LoginHeading>

        <SignupForm />
      </SignupFormGlassBox>
    </SignupContainer>
  );
};

export default SignupPage;
