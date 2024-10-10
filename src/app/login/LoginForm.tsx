"use client";

import Link from "next/link";
import Image from "next/image";

import * as formStyles from "@/styles/components/form/form.css";
import * as styles from "./style.css";

import { Input } from "@/components/atom/Input";
import { Button } from "@/components/atom/Button";
import { Separator } from "@/components/atom/Separator";
import { useState } from "react";
import { signInWithCredentials } from "../serverActions/auth";

const LoginForm = () => {
  const [signInError, setSignInError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signInWithCredentials(formData);

    if (result?.errorMessage) {
      setSignInError(result.errorMessage);
    } else {
      setSignInError(null);
    }
  };

  return (
    <div className={styles.loginFormWrapper}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.loginInputWrapper}>
          <div className={formStyles.formFieldContainer}>
            <label>이메일</label>
            <Input
              name="email"
              id="email"
              type="text"
              placeholder="이메일을 입력해주세요."
              className={formStyles.formInput}
              required
            />
          </div>

          <div className={formStyles.formFieldContainer}>
            <label>패스워드</label>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="패스워드를 입력해주세요."
              className={formStyles.formInput}
              required
            />
          </div>

          {signInError && <span className={formStyles.errorLetter}>{signInError}</span>}

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
        </div>

        <Button type="submit" className={formStyles.submitButton}>
          로그인
        </Button>
      </form>

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
