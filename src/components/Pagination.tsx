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
        <Image src="/chevron-left.svg" alt="moveToPrev" />
        <li className={styles.paginationChip}>1</li>
        <li className={styles.paginationChip}>2</li>
        <li className={styles.paginationChip}>3</li>
        <li className={styles.paginationChip}>4</li>
        <li className={styles.paginationChip}>5</li>
        <li className={styles.paginationChip}>...</li>
        <li className={styles.paginationChip}>32</li>
        <Image src="/chevron-right.svg" alt="moveToNext" />
      </div>

      <div className={styles.moveWrapper}>
        <input className={styles.moveToPageNumber} type="number" min={1} />
        <button className={styles.moveToPageButton}>이동</button>
      </div>
    </ul>
  );
};

export default Pagination;
