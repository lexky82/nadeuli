"use client";

import { useToastStore } from "@/stores/useToastStore";
import { createPortal } from "react-dom";
import * as styles from "@/styles/components/Toast.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Image from "next/image";

const ToastStauts = ({ status }: { status: string }) => {
  const icons = {
    success: <Image src="/Success.svg" alt="Success" width={36} height={36} />,
    error: <Image src="/Error.svg" alt="Error" width={36} height={36} />,
    info: <Image src="/Info.svg" alt="Info" width={36} height={36} />,
  } as const;

  return icons[status as keyof typeof icons];
};

const Toast = () => {
  const { toasts, hideToast } = useToastStore();

  if (toasts.length === 0) return null;

  return createPortal(
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <div key={toast.id} className={styles.toastWrapper}>
          <ToastStauts status={toast.status} />

          <div>
            <h3 className={styles.toastTitle}>{toast.message.title}</h3>
            <span>{toast.message.contents}</span>
          </div>

          <button className={styles.toastClose} onClick={() => hideToast(toast.id)}>
            <Image src="/close.svg" alt="close toast" width={20} height={20} />
          </button>
        </div>
      ))}
    </div>,
    document.body
  );
};

export default Toast;
