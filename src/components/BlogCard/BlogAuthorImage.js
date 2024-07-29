import styles from "./BlogAuthorImage.module.css";

function BlogAuthorImage({ author }) {
  return (
    <div className={styles.blogAuthorImageWrapper}>
      {author.split("")[0].toUpperCase()}
    </div>
  );
}

export default BlogAuthorImage;
