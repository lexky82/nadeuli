import React from "react";
import Image from "next/image";
import * as styles from "@/styles/components/Pagination.css";

interface PaginationProps {
  className?: string;
}

const Pagination = ({ className }: PaginationProps) => {
  return (
    <ul className={`${styles.paginationContainer} ${className}`}>
      <div className={styles.paginationWrapper}>
        <Image src="/chevron-left.svg" alt="moveToPrev" width={24} height={24} />
        <li className={styles.paginationChip}>1</li>
        <li className={styles.paginationChip}>2</li>
        <li className={styles.paginationChip}>3</li>
        <li className={styles.paginationChip}>4</li>
        <li className={styles.paginationChip}>5</li>
        <li className={styles.paginationChip}>...</li>
        <li className={styles.paginationChip}>32</li>
        <Image src="/chevron-right.svg" alt="moveToNext" width={24} height={24} />
      </div>
    </ul>
  );
};

export default Pagination;
