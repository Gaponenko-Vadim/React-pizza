import ReactPaginate from "react-paginate";
import React from "react";
import styles from "./styles.module.scss";

type PaginationProps = {
  setPaginationIteam: (e: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ setPaginationIteam }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(event) => setPaginationIteam(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
