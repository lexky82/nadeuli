import Link from "next/link";
import Image from "next/image";

import * as styles from "./styles.css";
import * as formStyles from "@/styles/components/form/form.css";

import { Separator } from "@/components/atom/Separator";
import { Input } from "@/components/atom/Input";
import { Button } from "@/components/atom/Button";

const SignupForm = () => {
  return (
    <div className={styles.signupFormContainer}>
      <div className={formStyles.socialLogin}>
        <div className={formStyles.googleLoginBox}>
          <Image src="/web_neutral_rd_na 1.svg" alt="google" width={40} height={40} />
          <span>구글 계정으로 로그인</span>
        </div>
      </div>

      <Separator className={formStyles.orSeparator}>or</Separator>

      <div className={formStyles.formFieldWrapper}>
        <label>이메일</label>
        <Input
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          className={formStyles.formInput}
        />
      </div>

      <div className={formStyles.formFieldWrapper}>
        <label>휴대전화(-를 제외하고)</label>
        <Input
          id="phone"
          type="text"
          placeholder="휴대전화 번호를 입력해주세요."
          className={formStyles.formInput}
        />
      </div>

      <div className={formStyles.formFieldWrapper}>
        <label>닉네임</label>
        <Input
          id="nickName"
          type="text"
          placeholder="닉네임을 입력해주세요."
          className={formStyles.formInput}
        />
      </div>

      <div className={formStyles.formFieldWrapper}>
        <label>패스워드</label>
        <Input
          id="password"
          type="password"
          placeholder="패스워드를 입력해주세요."
          className={formStyles.formInput}
        />
      </div>

      <div className={formStyles.formFieldWrapper}>
        <label>패스워드 확인</label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="입력한 패스워드를 다시 입력해주세요."
          className={formStyles.formInput}
        />
      </div>

      <Button type="submit" className={formStyles.submitButton}>
        회원가입
      </Button>

      <div className={formStyles.recomendSignup}>
        <span>계정이 있다면?</span>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
};

export default SignupForm;
