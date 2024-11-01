import * as formStyles from "@/styles/components/form/form.css";
import { Input } from "@/components/atom/Input";
import { Button } from "@/components/atom/Button";
import * as styles from "./style.css";

const ChangePwForm = () => {
  return (
    <div className={styles.changePwFormContainer}>
      <div className={formStyles.formFieldContainer}>
        <label>변경 패스워드</label>
        <Input
          name="password"
          id="password"
          type="password"
          placeholder="패스워드를 입력해주세요."
          className={formStyles.formInput}
          required
        />
      </div>

      <div className={formStyles.formFieldContainer}>
        <label>패스워드 확인</label>
        <Input
          name="password"
          id="password"
          type="password"
          placeholder="패스워드를 입력해주세요."
          className={formStyles.formInput}
          required
        />
      </div>

      <Button type="submit" className={`${formStyles.submitButton} ${styles.ChangePwButton}`}>
        패스워드 변경
      </Button>
    </div>
  );
};

export default ChangePwForm;
