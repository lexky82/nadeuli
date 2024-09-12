import * as styles from "@/styles/components/atom/separator.css";

interface SeparatorProps {
  children: React.ReactNode;
  className?: string;
}

export const Separator = ({ children, className }: SeparatorProps) => {
  return (
    <div className={`${styles.separator} ${className}`}>
      <span className={styles.child}>{children}</span>
    </div>
  );
};
