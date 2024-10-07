import * as styles from "@/styles/components/atom/button.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const Button = ({ onClick, children, className, type, style, disabled }: ButtonProps) => {
  return (
    <button
      style={style}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
