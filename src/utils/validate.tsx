import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email("이메일 형식이 아닙니다."),
    nickName: z.string(),
    password: z
      .string()
      .min(8, "8자 이상 16자 이하")
      .max(16, "8자 이상 16자 이하")
      .regex(/\d/, "숫자 조합 사용")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "특수 문자 포함 사용"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "패스워드와 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export const findPwSchema = z.object({
  email: z.string().email("이메일 형식이 아닙니다."),
});

export const changePwSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "8자 이상 16자 이하")
      .max(16, "8자 이상 16자 이하")
      .regex(/\d/, "숫자 조합 사용")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "특수 문자 포함 사용"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "패스워드와 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
