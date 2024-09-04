"use client";
import GlassBox from "@/components/atiom/GlassBox";
import Logo from "@/components/Logo";
import Heading from "@/components/atiom/Heading";

const LoginForm = () => {
  return (
    <GlassBox width={800} height={600} padding="40px">
      <Logo />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Heading>안녕하세요 나들이입니다.</Heading>
      </div>
    </GlassBox>
  );
};

export default LoginForm;
