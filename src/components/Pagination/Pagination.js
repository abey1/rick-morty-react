import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.module.scss";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <div>
      <ReactPaginate
        className="pagination d-flex justify-content-center my-4 gap-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        breakLabel="---"
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn"
        previousClassName="btn"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </div>
  );
};

export default Pagination;
