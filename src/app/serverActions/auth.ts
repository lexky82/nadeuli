"use server";
import { auth, signIn, signOut } from "@/app/auth";
import { redirect } from "next/navigation";

export const signInWithCredentials = async (formData: FormData) => {
  let errorMessage = null;

  try {
    const res = await signIn("credentials", {
      email: formData.get("email") || "",
      password: formData.get("password") || "",
      redirect: false,
    });

    if (res?.error) {
      errorMessage = res.error;
    }
  } catch (error: any) {
    errorMessage =
      error.cause.err.message || "서버와의 통신을 실패했습니다. 관리자에게 문의하세요.";
  }

  if (!errorMessage) {
    return redirect("/");
  }

  return { errorMessage };
};

export const signOutWithForm = async () => {
  await signOut();
};
export { auth as getSession };
