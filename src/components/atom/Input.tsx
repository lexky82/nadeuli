import * as styles from "@/styles/components/atom/input.css";

interface InputProps {
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export const Input = ({
  id,
  type,
  placeholder,
  onChange,
  className,
  required = false,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`${styles.input} ${className}`}
      required={required}
    />
  );
};
