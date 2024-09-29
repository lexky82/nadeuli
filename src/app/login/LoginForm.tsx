import Link from "next/link";
import Image from "next/image";

import * as formStyles from "@/styles/components/form/form.css";
import * as styles from "./style.css";

import { Input } from "@/components/atom/Input";
import { Button } from "@/components/atom/Button";
import { Separator } from "@/components/atom/Separator";

const LoginForm = () => {
  return (
    <div className={styles.loginFormWrapper}>
      <div className={formStyles.formFieldContainer}>
        <label>이메일</label>
        <Input
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          className={formStyles.formInput}
        />
      </div>

      <div className={formStyles.formFieldContainer}>
        <label>패스워드</label>
        <Input
          id="password"
          type="password"
          placeholder="패스워드를 입력해주세요."
          className={formStyles.formInput}
        />
      </div>

      <div className={styles.loginOptionsWrapper}>
        <div className={styles.autoLoginCheckbox}>
          <input type="checkbox" name="autoLogin" id="autoLogin" />
          <span>자동 로그인</span>
        </div>

        <div className={styles.findLinkBox}>
          <Link href="/findid">이메일 찾기</Link>
          <Link href="/findpw">패스워드 찾기</Link>
        </div>
      </div>

      <Button type="submit" className={formStyles.submitButton}>
        로그인
      </Button>

      <div className={formStyles.recomendSignup}>
        <span>계정이 없다면?</span>
        <Link href="/signup">회원가입</Link>
      </div>

      <Separator className={formStyles.orSeparator}>or</Separator>

      <div className={formStyles.socialLogin}>
        <div className={formStyles.googleLoginBox}>
          <Image src="/web_neutral_rd_na 1.svg" alt="google" width={40} height={40} />
          <span>구글 계정으로 로그인</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
