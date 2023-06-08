import { useMemo } from 'react';
import styles from './pagination.module.scss';

interface IPaginationProps {
  currentPage: number;
  pagesCount: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ pagesCount, currentPage, setPage }: IPaginationProps) => {
  const pages = useMemo(() => {
    return Array.from({ length: pagesCount }, (_, idx) => idx + 1);
  }, [pagesCount]);

  if (pagesCount < 2) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          className={page === currentPage ? styles.current : ''}
          type="button"
          key={page}
          onClick={() => setPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
