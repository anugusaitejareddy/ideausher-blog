import React from "react";
import BlogAuthorImage from "./BlogAuthorImage";
import styles from "./BlogCard.module.css";

function BlogCard({ imageURL, title, description, author, views, tags }) {
  return (
    <div className={styles.blogCardWrapper}>
      <img src={imageURL} alt="camping site with mountains and green fields" />
      <div className={styles.blogTitleWrapper}>
        <BlogAuthorImage author={author} />
        <h3>{title}</h3>
      </div>
      <span>{author}</span>
      <p>{description}</p>
      <p>{tags.join(",")}</p>
      <p>{views} Clicks</p>
    </div>
  );
}

export default React.memo(BlogCard);
