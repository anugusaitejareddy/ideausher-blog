import styles from "./BlogAuthorImage.module.css";

function BlogAuthorImage({ author }) {
  return (
    <div
      className={styles.blogAuthorImageWrapper}
      style={{ backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)` }}
    >
      {author.split("")[0].toUpperCase()}
    </div>
  );
}

export default BlogAuthorImage;
