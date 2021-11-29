import React from "react";

const Pagination = ({ setPageNumber, info }) => {
  let prev = () => {
    setPageNumber((x) => (x > 1 ? (x = x - 1) : (x = 1)));
  };

  let next = () => {
    setPageNumber((x) => (x < info.pages ? x + 1 : (x = 42)));
  };

  return (
    <div className="container d-flex justify-content-center my-5 gap-5">
      <button onClick={prev} className="btn btn-primary">
        Prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
