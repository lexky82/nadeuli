"use client";

import styled from "styled-components";
import Image from "next/image";
import GlassBox from "@/components/atom/GlassBox";
import Logo from "@/components/Logo";
import Heading from "@/components/atom/Heading";
import SignupForm from "./SignupForm";
import { FullScreenContainer } from "@/components/atom/FullScreenContainer";

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
    <FullScreenContainer>
      <Image
        src="/signup_background_image.jpg"
        alt="signup_cover_image"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <SignupFormGlassBox>
        <Logo />
        <LoginHeading>환영합니다. 나들이입니다.</LoginHeading>

        <SignupForm />
      </SignupFormGlassBox>
    </FullScreenContainer>
  );
};

export default SignupPage;
