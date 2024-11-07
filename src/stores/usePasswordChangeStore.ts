import { create } from "zustand";

interface PasswordChangeStore {
  currentStep: number;
  verifyEmail: string;
  nextStep: () => void;
  prevStep: () => void;
  setVerifyEmail: (email: string) => void;
  clearStore: () => void;
}

const usePasswordChangeStore = create<PasswordChangeStore>((set) => ({
  currentStep: 1,
  verifyEmail: "",
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  setVerifyEmail: (email) => set((state) => ({ verifyEmail: (state.verifyEmail = email) })),
  clearStore: () => set(() => ({ currentStep: 1, verifyEmail: "" })),
}));

export default usePasswordChangeStore;
