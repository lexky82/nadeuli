"use client";

import Link from "next/link";
import Image from "next/image";

import * as styles from "./styles.css";
import * as formStyles from "@/styles/components/form/form.css";

import { Separator } from "@/components/atom/Separator";
import { Input } from "@/components/atom/Input";
import { Button } from "@/components/atom/Button";
import { useForm } from "@/hook/useForm";
import { signupSchema } from "@/utils/validate";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as Vars from "@/styles/components/atom/input.css";
import axios from "axios";

const SignupForm = () => {
  const { formData, errors, handleChange } = useForm(
    {
      email: "",
      phone: "",
      nickName: "",
      password: "",
      confirmPassword: "",
    },
    signupSchema
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const sendVerificationMail = (email: string) => {
    axios
      .post("/api/auth/send-email-verification", {
        email,
      })
      .then((res) => {
        if (res.status === 200) {
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const formStateAction = (type: string) => {
    const actions = {
      success: "1px solid green",
      warning: "1px solid red",
      default: "1px solid #c1c1c9",
    } as const;

    return actions[type as keyof typeof actions] || actions["default"];
  };

  const emailBlurHandler = () => {};

  return (
    <form onSubmit={handleSubmit} className={styles.signupFormContainer}>
      <div className={formStyles.socialLogin}>
        <div className={formStyles.googleLoginBox}>
          <Image src="/web_neutral_rd_na 1.svg" alt="google" width={40} height={40} />
          <span>구글 계정으로 로그인</span>
        </div>
      </div>

      <Separator className={formStyles.orSeparator}>or</Separator>

      <div className={styles.signupInputWrapper}>
        <div className={formStyles.formFieldContainer}>
          <label htmlFor="email">이메일</label>
          <div className={formStyles.formInputWrapper} onBlur={emailBlurHandler}>
            <Input
              id="email"
              type="text"
              placeholder="이메일을 입력해주세요."
              className={formStyles.formInput}
              required
              onChange={handleChange}
              style={assignInlineVars({
                [Vars.formInputState]: formStateAction(
                  formData.email ? (errors.email ? "warning" : "success") : "defalut"
                ),
              })}
            />

            <span
              className={formStyles.emailVerification}
              onClick={() => sendVerificationMail(formData.email)}
            >
              이메일 인증
            </span>

            {errors.email && formData.email && (
              <div className={formStyles.fieldErrorMessage}>
                <p>
                  <p style={{ fontSize: 12 }}>{errors.email}</p>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={formStyles.formFieldContainer}>
          <label htmlFor="nickName">닉네임</label>
          <Input
            id="nickName"
            type="text"
            placeholder="닉네임을 입력해주세요."
            className={formStyles.formInput}
            required
            onChange={handleChange}
          />
        </div>

        <div className={formStyles.formFieldContainer}>
          <label htmlFor="password">패스워드</label>
          <div className={formStyles.formInputWrapper}>
            <Input
              id="password"
              type="password"
              placeholder="패스워드를 입력해주세요."
              className={formStyles.formInput}
              required
              onChange={handleChange}
              style={assignInlineVars({
                [Vars.formInputState]: formStateAction(
                  formData.password ? (errors.password ? "warning" : "success") : "defalut"
                ),
              })}
            />

            {errors.password && formData.password && (
              <div className={formStyles.fieldErrorMessage}>
                <p>
                  <p style={{ fontSize: 12 }}>{errors.password}</p>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={formStyles.formFieldContainer}>
          <label htmlFor="confirmPassword">패스워드 확인</label>

          <div className={formStyles.formInputWrapper}>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="패스워드를 다시 입력해주세요."
              className={formStyles.formInput}
              required
              onChange={handleChange}
              style={assignInlineVars({
                [Vars.formInputState]: formStateAction(
                  formData.confirmPassword
                    ? errors.confirmPassword
                      ? "warning"
                      : "success"
                    : "defalut"
                ),
              })}
            />

            {errors.confirmPassword && formData.confirmPassword && (
              <div className={formStyles.fieldErrorMessage}>
                <p>
                  <p style={{ fontSize: 12 }}>{errors.confirmPassword}</p>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Button type="submit" className={formStyles.submitButton}>
        회원가입
      </Button>

      <div className={formStyles.recomendSignup}>
        <span>계정이 있다면?</span>
        <Link href="/login">로그인</Link>
      </div>
    </form>
  );
};

export default SignupForm;
