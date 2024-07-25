import { IoSearch } from "react-icons/io5";
import React from "react";
import styles from "./BlogSearch.module.css";

function BlogSearch({ onSearch }) {
  const [searchInput, setSearchInput] = React.useState("");

  function handleSearch(e) {
    onSearch(e.target.value);
    setSearchInput(e.target.value);
  }

  return (
    <div className={styles.blogSearch}>
      <input
        type="search"
        placeholder="search blogs"
        value={searchInput}
        onChange={(e) => handleSearch(e)}
      />
      <IoSearch />
    </div>
  );
}

export default BlogSearch;
