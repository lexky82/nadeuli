"use client";

import Button from "@/components/atom/Button";
import GlassBox from "@/components/atom/GlassBox";
import Heading from "@/components/atom/Heading";
import Input from "@/components/atom/Input";
import Separator from "@/components/atom/Separator";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/login_background_image.jpg");
`;

export const LoginHeading = styled(Heading)`
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 45px;
`;

export const LoginFormGalssBox = styled(GlassBox)`
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 520px;
  padding: 40px;
`;

export const LoginFormContainer = styled.div``;

export const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FormFieldWrapper = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled(Input)`
  width: 380px;
  margin-bottom: 10px;
  margin-top: 5px;
  backdrop-filter: none;
`;

export const LoginOptionsWrapper = styled.div`
  display: flex;
  width: 412px;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const FindLinkBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const Submit = styled(Button)`
  width: 412px;
  border-radius: 15px;
  font-size: 16px;
  height: 40px;
  margin-bottom: 5px;
`;

export const OrSeparator = styled(Separator)`
  max-width: 412px;
  border: 2px;
  margin-bottom: 10px;
`;

export const RecomendSignup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

export const SocialLogin = styled.div``;

export const GoogleLoginBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 30px;
  background-color: #d9d9d9;
  width: 412px;
  gap: 106px;
`;

export const AutoLoginCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
