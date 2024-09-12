import * as styles from "@/styles/components/atom/input.css";

interface InputProps {
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
}

export const Input = ({ id, type, placeholder, onChange, className }: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`${styles.input} ${className}`}
    />
  );
};
