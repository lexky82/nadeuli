"use client";

import { Button } from "@/components/atom/Button";
import { Input } from "@/components/atom/Input";
import { useForm } from "@/hook/useForm";
import { useToastStore } from "@/stores/useToastStore";
import * as formStyles from "@/styles/components/form/form.css";
import { findPwSchema } from "@/utils/validate";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import * as Vars from "@/styles/components/atom/input.css";
import useStepStore from "@/stores/useStepStore";
import * as styles from "./style.css";

const FindPwForm = () => {
  const { formData, errors, handleChange } = useForm(
    {
      email: "",
    },
    findPwSchema
  );
  const toast = useToastStore((state) => state.showToast);
  const nextStep = useStepStore((state) => state.nextStep);

  const [isEmailCheck, setIsEmailCheck] = useState<"success" | "pending" | null>(null);
  const emailBlurHandler = (email: string) => {
    if (isEmailCheck !== "pending") {
      return;
    }

    axios.get("/api/auth/is-validEmail", { params: { email } }).then((res) => {
      res.status === 200 && setIsEmailCheck("success");
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

  const sendVerificationMail = (e: React.MouseEvent<HTMLButtonElement>, email: string) => {
    e.preventDefault();
    if (!email) {
      return;
    }

    axios
      .post("/api/auth/send-email-verification", {
        email,
      })
      .then((res) => {
        if (res.status === 200) {
          toast(
            {
              title: "이메일 인증",
              contents: `${email}로 인증 메일을 발송하였습니다.`,
            },
            "info"
          );
          setIsEmailCheck("pending");
        }
      })
      .catch((error: AxiosError) => {
        if (error.status === 409) {
          return toast({ title: "이메일 인증", contents: "이미 존재하는 이메일입니다." }, "error");
        }
      });
  };

  const handleSubmit = () => {
    nextStep();
  };

  return (
    <div>
      <form className={styles.findPwFormContainer} onSubmit={handleSubmit}>
        <div
          className={formStyles.formFieldContainer}
          onBlur={() => emailBlurHandler(formData.email)}
        >
          <label htmlFor="email">이메일</label>
          <div className={formStyles.formInputWrapper}>
            <Input
              id="email"
              type="text"
              placeholder="이메일을 입력해주세요."
              className={formStyles.formInput}
              onChange={handleChange}
              required
              style={assignInlineVars({
                [Vars.formInputState]: formStateAction(
                  formData.email ? (errors.email ? "warning" : "success") : "defalut"
                ),
              })}
              disabled={isEmailCheck === "success"}
            />

            {isEmailCheck !== "success" ? (
              <button
                className={formStyles.emailVerification}
                onClick={(e) => sendVerificationMail(e, formData.email)}
              >
                이메일 인증
              </button>
            ) : (
              <span className={formStyles.successVerification}>이메일 인증이 완료되었습니다.</span>
            )}
          </div>
        </div>

        <Button type="submit" className={formStyles.submitButton}>
          패스워드 변경
        </Button>
      </form>
    </div>
  );
};

export default FindPwForm;
