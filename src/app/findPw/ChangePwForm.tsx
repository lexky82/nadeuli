import * as formStyles from "@/styles/components/form/form.css";
import { Input } from "@/components/atom/Input";
import { Button } from "@/components/atom/Button";
import * as styles from "./style.css";
import { useForm } from "@/hook/useForm";
import { changePwSchema } from "@/utils/validate";
import * as Vars from "@/styles/components/atom/input.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { FormEventHandler } from "react";
import axios from "axios";
import usePasswordChangeStore from "@/stores/usePasswordChangeStore";
import { useToastStore } from "@/stores/useToastStore";
import { useRouter } from "next/navigation";

const ChangePwForm = () => {
  const { formData, errors, handleChange } = useForm(
    { newPassword: "", confirmPassword: "" },
    changePwSchema
  );
  const { verifyEmail } = usePasswordChangeStore();
  const toast = useToastStore((state) => state.showToast);
  const rotuer = useRouter();

  const formStateAction = (type: string) => {
    const actions = {
      success: "1px solid green",
      warning: "1px solid red",
      default: "1px solid #c1c1c9",
    } as const;

    return actions[type as keyof typeof actions] || actions["default"];
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length !== 0) {
      return;
    }

    axios
      .patch("/api/authentication/change-password", {
        email: verifyEmail,
        newPassword: formData.newPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          toast({ title: "비밀번호 변경", contents: "비밀번호 변경을 성공하였습니다." }, "success");
          return rotuer.push("/login");
        }

        toast({ title: "비밀번호 변경", contents: res.data.message }, "info");
      })
      .catch((err) => {});
  };

  return (
    <form className={styles.changePwFormContainer} onSubmit={handleSubmit}>
      <div className={formStyles.formFieldContainer}>
        <label htmlFor="newPassword">변경 패스워드</label>
        <div className={formStyles.formInputWrapper}>
          <Input
            name="newPassword"
            id="newPassword"
            type="password"
            placeholder="패스워드를 입력해주세요."
            onChange={handleChange}
            className={formStyles.formInput}
            style={assignInlineVars({
              [Vars.formInputState]: formStateAction(
                formData.newPassword ? (errors.newPassword ? "warning" : "success") : "defalut"
              ),
            })}
            required
          />

          {errors.newPassword && formData.newPassword && (
            <div className={formStyles.fieldErrorMessage}>
              <p>
                <p style={{ fontSize: 12 }}>{errors.newPassword}</p>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={formStyles.formFieldContainer}>
        <label>패스워드 확인</label>
        <div className={formStyles.formInputWrapper}>
          <Input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            onChange={handleChange}
            placeholder="패스워드를 입력해주세요."
            className={formStyles.formInput}
            style={assignInlineVars({
              [Vars.formInputState]: formStateAction(
                formData.confirmPassword
                  ? errors.confirmPassword
                    ? "warning"
                    : "success"
                  : "defalut"
              ),
            })}
            required
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

      <Button type="submit" className={`${formStyles.submitButton} ${styles.ChangePwButton}`}>
        패스워드 변경
      </Button>
    </form>
  );
};

export default ChangePwForm;
