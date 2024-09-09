"use client";

import Logo from "@/components/Logo";
import LoginForm from "./LoginForm";
import { LoginFormGlassBox, LoginHeading } from "./style";
import Image from "next/image";
import { FullScreenContainer } from "@/components/atom/FullScreenContainer";

const LoginPage = () => {
  return (
    <FullScreenContainer>
      <Image
        src="/login_background_image.jpg"
        alt="login_cover_image"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <LoginFormGlassBox>
        <Logo />
        <LoginHeading>안녕하세요 나들이입니다.</LoginHeading>

        <LoginForm />
      </LoginFormGlassBox>
    </FullScreenContainer>
  );
};

export default LoginPage;
