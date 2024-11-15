"use client";

import { Button } from "@/components/atom/Button";
import * as styles from "./style.css";
import * as accountStyle from "../account.css";
import Image from "next/image";
import AccountNav from "../AccountNav";
import { useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { Input } from "@/components/atom/Input";
import axios from "axios";
import { useToastStore } from "@/stores/useToastStore";
import Modal from "@/components/Modal";

export const AccountSetting = () => {
  const { data: session, update } = useSession();
  const [isEditMode, setIsEditMode] = useState(false);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] = useState(false);
  const toast = useToastStore((state) => state.showToast);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result as string);
      };
      reader.readAsDataURL(image);
    }
  };

  const handleEditSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    axios.patch(`/api/profile/edit-profile/${session?.user?.email}`, formData).then(async (res) => {
      if (res.status === 200) {
        await update();
        toast({ title: "프로필 수정", contents: "프로필 변경을 성공했습니다." }, "success");
        setIsEditMode(false);
        window.location.reload();
      }
    });
  };

  const handlePasswordChange = () => {
    setIsPasswordChangeModalOpen(true);
  };

  const handleChangePasswordSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className={accountStyle.accountPageContainer}>
      <AccountNav />
      <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
        <h1 className={accountStyle.accountPageTitle}>계정 관리</h1>

        <div>
          <h2 className={accountStyle.accountSectionTitle}>기본 정보</h2>

          {isEditMode ? (
            <form className={styles.accountInfoContainer} onSubmit={handleEditSubmit}>
              <div className={styles.accountInfoWrapper}>
                <div style={{ position: "relative" }}>
                  <img
                    src={
                      base64Image
                        ? base64Image
                        : `http://localhost:4000/static/uploads/users/${session?.user?.email}/profile.jpeg`
                    }
                    alt="profile"
                    width={150}
                    height={150}
                    className={styles.defaultProfileImage}
                  />

                  <input
                    type="file"
                    id="inputFile"
                    name="profile"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <label className="inputFileCustom" htmlFor="inputFile">
                    <Image
                      src="/Ink_pen.svg"
                      width={38}
                      height={38}
                      alt="write"
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        bottom: 10,
                        right: 0,
                      }}
                    />
                  </label>
                </div>

                <div className={styles.editFormFieldContainer}>
                  <label htmlFor="name" style={{ width: 60 }}>
                    이름
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="닉네임을 입력해주세요."
                    defaultValue={session?.user?.name ? session?.user.name : ""}
                    className={styles.editInput}
                    required
                  />
                </div>

                <div className={styles.editFormFieldContainer}>
                  <label htmlFor="name" style={{ width: 60 }}>
                    이메일
                  </label>
                  <Input
                    id="email"
                    type="text"
                    name="email"
                    disabled
                    placeholder="이메일을 입력해주세요."
                    defaultValue={session?.user?.email ? session?.user.email : ""}
                    className={styles.editInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.editModeQuitButtons}>
                <Button
                  style={{
                    width: 90,
                    borderRadius: 5,
                    background: "white",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={() => {
                    setIsEditMode(false);
                    setBase64Image(null);
                  }}
                >
                  취소
                </Button>

                <Button type="submit" style={{ borderRadius: 5, width: 90 }}>
                  저장
                </Button>
              </div>
            </form>
          ) : (
            <div className={styles.accountInfoContainer}>
              <div className={styles.accountInfoWrapper}>
                <img
                  src={`http://localhost:4000/static/uploads/users/${session?.user?.email}/profile.jpeg`}
                  alt="profile"
                  width={150}
                  height={150}
                  className={styles.defaultProfileImage}
                />

                <span className={styles.userNickname}>{session?.user?.name}</span>

                <div className={styles.userEmailWrapper}>
                  <span className={styles.userEmail}>{session?.user?.email}</span>

                  <Image src="/validated.svg" alt="email validated" width={24} height={24} />
                  <span className={styles.emailValidated}>인증 완료!</span>
                </div>
              </div>

              <Button onClick={handleEditClick} className={styles.editUserInfoButton}>
                수정
              </Button>
            </div>
          )}
        </div>

        <div>
          <h2 className={accountStyle.accountSectionTitle}>패스워드</h2>

          <div className={styles.passwordChangeContainer}>
            <div className={styles.passwordChangeWrapper}>
              <p className={styles.passwordChangeContents}>
                <span>최근 업데이트 : </span>
                <span>2024.08.16</span>
              </p>

              <p className={styles.passwordChangeContents}>패스워드</p>
            </div>

            <Button className={styles.passwordChangeButton} onClick={handlePasswordChange}>
              패스워드 변경
            </Button>
          </div>
        </div>

        <div>
          <h2 className={accountStyle.accountSectionTitle}>계정 연동</h2>

          <div className={styles.socialLoginContainer}></div>
        </div>
      </div>

      <Modal
        title="비밀번호 변경"
        isOpen={isPasswordChangeModalOpen}
        onClose={() => setIsPasswordChangeModalOpen(false)}
      >
        <form
          onSubmit={handleChangePasswordSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            fontSize: 14,
            paddingTop: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <label htmlFor="currentPassword" style={{ width: 189 }}>
              현재 비밀번호
            </label>
            <Input
              id="currentPassword"
              type="text"
              name="currentPassword"
              placeholder="현재 비밀번호을 입력해주세요."
              className={styles.editInput}
              required
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <label htmlFor="changePassword" style={{ width: 189 }}>
              변경 비밀번호
            </label>
            <Input
              id="changePassword"
              type="text"
              name="changePassword"
              placeholder="변경할 비밀번호을 입력해주세요."
              className={styles.editInput}
              required
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <label htmlFor="confirmPassword" style={{ width: 189 }}>
              변경 비밀번호 확인
            </label>
            <Input
              id="confirmPassword"
              type="text"
              name="confirmPassword"
              placeholder="변경 비밀번호를 다시 입력해주세요."
              className={styles.editInput}
              required
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 5 }}>
            <Button
              style={{
                width: 90,
                borderRadius: 5,
                background: "white",
                color: "black",
                border: "1px solid black",
              }}
              onClick={() => {
                setIsPasswordChangeModalOpen(false);
              }}
            >
              취소
            </Button>

            <Button type="submit" style={{ borderRadius: 5, width: 90 }}>
              변경
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AccountSetting;
