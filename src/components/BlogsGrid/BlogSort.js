import React from "react";

function BlogSort({ onSort }) {
  const [sortBy, setSortBy] = React.useState("mostViewed");

  React.useEffect(() => {
    onSort(sortBy);
  }, [sortBy, onSort]);

  return (
    <div>
      <label>
        Sort by{" : "}
        <select
          id="blog-sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="mostViewed">Most viewed</option>
          <option value="leastViewed">Least viewed</option>
        </select>
      </label>
    </div>
  );
}

export default BlogSort;
