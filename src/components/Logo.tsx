import Image from "next/image";
import Link from "next/link";
import * as styles from "../styles/Logo.css";

export default function Logo() {
  return (
    <Link href="/">
      <div className={styles.logoWrapper}>
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />

        <span className={styles.title}>나들이</span>
      </div>
    </Link>
  );
}
