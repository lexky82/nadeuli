import { create } from "zustand";

interface WriteStore {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  changeStep: (step: number) => void;
  clearStore: () => void;
}

const useWriteStore = create<WriteStore>((set) => ({
  currentStep: 1,
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  changeStep: (step) => set(() => ({ currentStep: step })),
  clearStore: () => set(() => ({ currentStep: 1, verifyEmail: "" })),
}));

export default useWriteStore;
