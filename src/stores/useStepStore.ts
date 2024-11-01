import { create } from "zustand";

interface StepStore {
  currentStep: number;
  isEmailVerified: boolean;
  nextStep: () => void;
  prevStep: () => void;
}

const useStepStore = create<StepStore>((set) => ({
  currentStep: 1,
  isEmailVerified: false,
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  clearStep: () => set(() => ({ currentStep: 1 })),
}));

export default useStepStore;
