"use client";

import { ReactNode } from "react";
import * as styles from "@/styles/components/Modal.css";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  return (
    isOpen && (
      <div className={styles.modalBackdrop} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <h3>{title}</h3>
            <span style={{ cursor: "pointer" }} onClick={onClose}>
              <Image src="/Close.svg" width={24} height={24} alt="모달 닫기" />
            </span>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
