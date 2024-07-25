import React from "react";
import blogsData from "../../constants/blogs-data.json";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogsGrid.module.css";
import { Link } from "react-router-dom";
import BlogSearch from "./BlogSearch";
import BlogSort from "./BlogSort";

function BlogsGrid() {
  const [blogs, setBlogs] = React.useState(blogsData);

  function searchBlogs(input) {
    if (input === "") {
      setBlogs(blogsData);
    } else {
      const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(input.trim().toLowerCase())
      );
      setBlogs(filteredBlogs);
    }
  }

  function sortBlogs(sortBy) {
    console.log("sortBlogs function");
    if (sortBy === "mostViewed") {
      const sortedBlogs = blogs.sort((a, b) => a.views < b.views);
      console.log("descending :");
      console.log(sortedBlogs);
      setBlogs([...sortedBlogs]);
    } else if (sortBy === "leastViewed") {
      const sortedBlogs = blogs.sort((a, b) => a.views > b.views);
      console.log("Ascending :");
      console.log(sortedBlogs);
      setBlogs([...sortedBlogs]);
    }
  }

  return (
    <div>
      <div className={styles.blogFilterWrapper}>
        <BlogSearch onSearch={searchBlogs} />
        <BlogSort onSort={sortBlogs} />
      </div>
      <div className={styles.blogsGridWrapper}>
        {blogs.map((blog) => (
          <Link to={"blog/" + blog.id}>
            <BlogCard key={blog.id} {...blog} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsGrid;
