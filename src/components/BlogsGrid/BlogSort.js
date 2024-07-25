import React from "react";

function BlogSort({ onSort }) {
  const [sortBy, setSortBy] = React.useState("default");

  function handleSort(e) {
    onSort(e.target.value);
    setSortBy(e.target.value);
  }

  return (
    <div>
      <label>
        Sort by{" : "}
        <select id="blog-sort" value={sortBy} onChange={(e) => handleSort(e)}>
          <option value="default">--Select a Value--</option>
          <option value="mostViewed">Most viewed</option>
          <option value="leastViewed">Least viewed</option>
        </select>
      </label>
    </div>
  );
}

export default BlogSort;
