import { IoSearch } from "react-icons/io5";
import React from "react";
import styles from "./BlogSearch.module.css";

function BlogSearch({ onSearch }) {
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    onSearch(searchInput);
  }, [searchInput, onSearch]);
  return (
    <div className={styles.blogSearch}>
      <input
        type="search"
        placeholder="search blogs"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <IoSearch />
    </div>
  );
}

export default BlogSearch;
