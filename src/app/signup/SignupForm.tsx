"use client";
import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";
import {
  FormFieldWrapper,
  FormInput,
  GoogleLoginBox,
  OrSeparator,
  RecomendSignup,
  SocialLogin,
  Submit,
} from "@/components/form";

const SignupFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 150px;
`;

const SignupSubmit = styled(Submit)`
  margin-top: 15px;
`;

const SignupForm = () => {
  return (
    <SignupFormContainer>
      <SocialLogin>
        <GoogleLoginBox>
          <Image src="/web_neutral_rd_na 1.svg" alt="google" width={40} height={40} />
          <span>구글 계정으로 로그인</span>
        </GoogleLoginBox>
      </SocialLogin>

      <OrSeparator>
        <span>or</span>
      </OrSeparator>

      <FormFieldWrapper>
        <label>이메일</label>
        <FormInput id="email" type="text" placeholder="이메일을 입력해주세요." />
      </FormFieldWrapper>

      <FormFieldWrapper>
        <label>휴대전화(-를 제외하고)</label>
        <FormInput id="phone" type="text" placeholder="휴대전화 번호를 입력해주세요." />
      </FormFieldWrapper>

      <FormFieldWrapper>
        <label>닉네임</label>
        <FormInput id="nickName" type="text" placeholder="닉네임을 입력해주세요." />
      </FormFieldWrapper>

      <FormFieldWrapper>
        <label>패스워드</label>
        <FormInput id="password" type="password" placeholder="패스워드를 입력해주세요." />
      </FormFieldWrapper>

      <FormFieldWrapper>
        <label>패스워드 확인</label>
        <FormInput
          id="confirmPassword"
          type="password"
          placeholder="입력한 패스워드를 다시 입력해주세요."
        />
      </FormFieldWrapper>

      <SignupSubmit>회원가입</SignupSubmit>

      <RecomendSignup>
        <span>계정이 있다면?</span>
        <Link href="/login">로그인</Link>
      </RecomendSignup>
    </SignupFormContainer>
  );
};

export default SignupForm;
