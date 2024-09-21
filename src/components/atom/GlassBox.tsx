import * as styles from "@/styles/components/atom/glassbox.css";

interface GlassBoxProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const GlassBox = ({ children, className, style }: GlassBoxProps) => {
  return (
    <div style={style} className={`${styles.glassBox} ${className}`}>
      {children}
    </div>
  );
};
