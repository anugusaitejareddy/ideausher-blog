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
    console.log(sortBy);
    if (sortBy === "mostViewed") {
      console.log("mostViewed if");
      const sortedBlogs = blogs.sort((a, b) => b.views - a.views);
      setBlogs([...sortedBlogs]);
    } else if (sortBy === "leastViewed") {
      const sortedBlogs = blogs.sort((a, b) => a.views - b.views);
      setBlogs([...sortedBlogs]);
    }
  }

  return (
    <div className={styles.blogsGridContainer}>
      <div className={styles.blogFilterWrapper}>
        <BlogSearch onSearch={searchBlogs} />
        <BlogSort onSort={sortBlogs} />
      </div>
      <div className={styles.blogsGridWrapper}>
        {blogs.map((blog) => (
          <Link to={"blog/" + blog.id} key={blog.id}>
            <BlogCard {...blog} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsGrid;
