import React from "react";
import styles from "./Search.module.scss";
const Search = () => {
  return (
    <form className="d-flex justify-content-center mb-5 gap-5">
      <input
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
      />
      <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;
