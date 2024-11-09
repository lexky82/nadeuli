import * as styles from "./style.css";
import * as style from "@/styles/components/atom/fullScreenContainer.css";
import Logo from "@/components/atom/Logo";
import LoginForm from "./LoginForm";
import Image from "next/image";
import { GlassBox } from "@/components/atom/GlassBox";

const LoginPage = () => {
  return (
    <div className={style.fullScreenContainer}>
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
      <GlassBox className={styles.loginFormGlassBox}>
        <Logo />

        <div className={styles.loginFormWrapper}>
          <h1 className={styles.loginHeading}>안녕하세요 나들이입니다.</h1>

          <LoginForm />
        </div>
      </GlassBox>
    </div>
  );
};

export default LoginPage;
