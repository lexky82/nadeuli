import { create } from "zustand";

interface WriteStore {
  currentStep: number;
  steps: [
    {
      id: 1;
      isCompleted: boolean;
      isValid: boolean;
      data: {
        nadeuliInfo: {
          title: string;
          location: string;
          date: string;
          wheather: string;
          visitor: number;
        };
      };
    },
    { id: 2; isCompleted: boolean; isValid: boolean; data: { travelogue: string } },
    { id: 3; isCompleted: boolean; isValid: boolean; data: {} }
  ];

  nextStep: () => void;
  prevStep: () => void;
  changeStep: (step: number) => void;
  clearStore: () => void;
}

const useWriteStore = create<WriteStore>((set) => ({
  currentStep: 1,

  steps: [
    {
      id: 1,
      isCompleted: false,
      isValid: false,
      data: { nadeuliInfo: { title: "", location: "", date: "", wheather: "", visitor: 0 } },
    },
    { id: 2, isCompleted: false, isValid: false, data: { travelogue: "" } },
    { id: 3, isCompleted: false, isValid: false, data: {} },
  ],

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  changeStep: (step) => set(() => ({ currentStep: step })),
  clearStore: () =>
    set(() => ({
      currentStep: 1,
      steps: [
        {
          id: 1,
          isCompleted: false,
          isValid: false,
          data: { nadeuliInfo: { title: "", location: "", date: "", wheather: "", visitor: 0 } },
        },
        { id: 2, isCompleted: false, isValid: false, data: { travelogue: "" } },
        { id: 3, isCompleted: false, isValid: false, data: {} },
      ],
    })),
}));

export default useWriteStore;
