import * as styles from "@/styles/components/atom/glassbox.css";

interface GlassBoxProps {
  className?: string;
  children?: React.ReactNode;
}

export const GlassBox = ({ children, className }: GlassBoxProps) => {
  return <div className={`${styles.glassBox} ${className}`}>{children}</div>;
};
