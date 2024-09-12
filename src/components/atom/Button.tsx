import * as styles from "@/styles/components/atom/button.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const Button = ({ onClick, children, className, type }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
