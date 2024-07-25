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
      <p>{description}</p>
      <div className={styles.blogCardTagsWrapper}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.blogCardTags}>
            {tag}
          </span>
        ))}
      </div>
      <p>Author: {author}</p>
      <p>{views} Visits</p>
    </div>
  );
}

export default React.memo(BlogCard);
