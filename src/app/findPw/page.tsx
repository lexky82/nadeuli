"use client";

import * as styles from "./style.css";
import * as style from "@/styles/components/atom/fullScreenContainer.css";
import { GlassBox } from "@/components/atom/GlassBox";
import Logo from "@/components/atom/Logo";
import FindPwForm from "./FindPwForm";
import * as loginStyle from "../login/style.css";
import Image from "next/image";
import useStepStore from "@/stores/useStepStore";
import ChangePwForm from "./ChangePwForm";

const FindPw = () => {
  const currentStep = useStepStore((state) => state.currentStep);

  return (
    <div className={`${style.fullScreenContainer}`}>
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
      <GlassBox className={styles.findIdGlassBox}>
        <Logo />

        <div className={loginStyle.loginFormWrapper}>
          <h1 className={loginStyle.loginHeading}>패스워드 찾기</h1>

          {currentStep === 1 ? <FindPwForm /> : <ChangePwForm />}
        </div>
      </GlassBox>
    </div>
  );
};

export default FindPw;
