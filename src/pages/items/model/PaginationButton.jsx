import styles from './PaginationButton.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PaginationButton = ({ totalPage, currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const pageGroupSize = 5;

    let startPage =
      Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + 1;
    let endPage = Math.min(totalPage, startPage + pageGroupSize - 1);

    if (endPage - startPage < pageGroupSize - 1) {
      startPage = Math.max(1, endPage - pageGroupSize + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination_button}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      <div className={styles.pagination_numbers}>
        {getPageNumbers().map((pageNum) => (
          <span
            key={pageNum}
            className={`${styles.pagination_number} ${
              pageNum === currentPage ? styles.active : ''
            }`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </span>
        ))}
      </div>
      <button
        className={styles.pagination_button}
        onClick={handleNextPage}
        disabled={currentPage === totalPage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default PaginationButton;
