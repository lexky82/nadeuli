import Image from "next/image";
import * as style from "@/styles/components/atom/fullScreenContainer.css";
import Logo from "@/components/atom/Logo";
import * as styles from "./styles.css";
import SignupForm from "./SignupForm";
import { GlassBox } from "@/components/atom/GlassBox";
import { getSession } from "../serverActions/auth";
import { redirect } from "next/navigation";

const SignupPage = async () => {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

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
