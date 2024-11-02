"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import * as styles from "@/styles/components/DropDown.css";
import Image from "next/image";

interface DropDownProps {
  placeholder?: string;
  children?: ReactNode;
  className?: string;
}

const DropDown = ({ placeholder, className, children }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownWidth, setDropDownWidth] = useState(0);

  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (dropDownRef.current) {
      setDropDownWidth(dropDownRef.current.clientWidth);
    }
  }, []);

  return (
    <div className={styles.dropdownWrapper} ref={dropDownRef} tabIndex={0}>
      <div className={`${styles.dropdownButton} ${className}`} onClick={toggleDropdown}>
        <span>{placeholder}</span>
        <Image
          src="/Dropdown_open.svg"
          alt="토글버튼"
          width={24}
          height={24}
          style={{ marginTop: 2 }}
        />
      </div>

      {isOpen && (
        <div className={styles.dropdownContent} style={{ width: dropDownWidth }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
