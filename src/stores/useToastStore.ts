import { create } from "zustand";

interface Imessage {
  title: string;
  contents: string;
}

interface Toast {
  id: number;
  message: Imessage;
  status: "success" | "error" | "info";
}

interface ToastState {
  toasts: Toast[];
  showToast: (message: Imessage, status: "success" | "error" | "info") => void;
  hideToast: (id: number) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  showToast: (message, status) => {
    const id = Date.now();
    set((state) => ({
      toasts: [...state.toasts, { id, message, status }],
    }));
    setTimeout(
      () =>
        set((state) => ({
          toasts: state.toasts.filter((toast) => toast.id !== id),
        })),
      3000
    );
  },
  hideToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
