import ReactPaginate from "react-paginate";
import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { setPaginationIteam } from "../../redux/slice/filter";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(event) =>
          dispatch(setPaginationIteam(event.selected + 1))
        }
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
