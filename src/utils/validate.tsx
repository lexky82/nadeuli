import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email("이메일 형식이 아닙니다."),
  phone: z.string(),
  nickName: z.string(),
  password: z
    .string()
    .min(8, "8자 이상 16자 이하")
    .max(16, "8자 이상 16자 이하")
    .regex(/\d/, "숫자 조합 사용"),
  passwordConfirm: z.string(),
});
