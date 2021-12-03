import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="d-flex justify-content-center mb-5 gap-5">
      <input
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
