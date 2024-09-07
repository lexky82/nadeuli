"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FormFieldWrapper,
  FormInput,
  Submit,
  RecomendSignup,
  OrSeparator,
  SocialLogin,
  GoogleLoginBox,
} from "@/components/form";
import { LoginFormWrapper, LoginOptionsWrapper, AutoLoginCheckbox, FindLinkBox } from "./style";

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <FormFieldWrapper>
        <label>이메일</label>
        <FormInput id="email" type="text" placeholder="이메일을 입력해주세요." />
      </FormFieldWrapper>

      <FormFieldWrapper>
        <label>패스워드</label>
        <FormInput id="password" type="password" placeholder="패스워드를 입력해주세요." />
      </FormFieldWrapper>

      <LoginOptionsWrapper>
        <AutoLoginCheckbox>
          <input type="checkbox" name="autoLogin" id="autoLogin" />
          <span>자동 로그인</span>
        </AutoLoginCheckbox>

        <FindLinkBox>
          <Link href="/findid">이메일 찾기</Link>
          <Link href="/findpw">패스워드 찾기</Link>
        </FindLinkBox>
      </LoginOptionsWrapper>

      <Submit type="submit">로그인</Submit>

      <RecomendSignup>
        <span>계정이 없다면?</span>
        <Link href="/signup">회원가입</Link>
      </RecomendSignup>

      <OrSeparator>
        <span>or</span>
      </OrSeparator>

      <SocialLogin>
        <GoogleLoginBox>
          <Image src="/web_neutral_rd_na 1.svg" alt="google" width={40} height={40} />
          <span>구글 계정으로 로그인</span>
        </GoogleLoginBox>
      </SocialLogin>
    </LoginFormWrapper>
  );
};

export default LoginForm;
