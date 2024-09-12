import Image from "next/image";
import * as style from "@/styles/components/atom/fullScreenContainer.css";
import Logo from "@/components/Logo";
import * as styles from "./styles.css";
import SignupForm from "./SignupForm";
import { GlassBox } from "@/components/atom/GlassBox";

const SignupPage = () => {
  return (
    <div className={style.fullScreenContainer}>
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
      <GlassBox className={styles.signupFormGlassBox}>
        <Logo />
        <h1 className={styles.loginHeading}>환영합니다. 나들이입니다.</h1>

        <SignupForm />
      </GlassBox>
    </div>
  );
};

export default SignupPage;
