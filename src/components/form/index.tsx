import { styled } from "styled-components";
import Input from "../atom/Input";
import Separator from "../atom/Separator";
import Button from "../atom/Button";

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  margin-top: 5px;
  backdrop-filter: none;
`;

export const RecomendSignup = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
`;

export const SocialLogin = styled.div``;

export const GoogleLoginBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 30px;
  gap: 25%;
  width: 419px;
  background-color: #d9d9d9;
`;

export const OrSeparator = styled(Separator)`
  border: 2px;
  margin: 14px 0;
`;

export const Submit = styled(Button)`
  border-radius: 15px;
  font-size: 16px;
  height: 40px;
  margin-bottom: 5px;
`;
