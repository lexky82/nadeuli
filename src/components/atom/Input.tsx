import * as styles from "@/styles/components/atom/input.css";
import { CSSProperties, RefAttributes } from "react";

interface InputProps {
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  required?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  name?: string;
  defaultValue?: string;
}

export const Input = ({
  id,
  type,
  placeholder,
  onChange,
  className,
  required = false,
  style,
  name,
  disabled,
  defaultValue,
}: InputProps) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`${styles.input} ${className}`}
      required={required}
      style={style}
      disabled={disabled}
      defaultValue={defaultValue}
    />
  );
};
