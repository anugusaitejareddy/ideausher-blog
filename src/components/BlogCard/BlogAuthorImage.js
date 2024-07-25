import styles from "./BlogAuthorImage.module.css";

function BlogAuthorImage({ author }) {
  return (
    <div
      className={styles.blogAuthorImageWrapper}
      style={{ backgroundColor: "hsl(245deg, 100%, 60%)", color: "" }}
    >
      {author.split("")[0].toUpperCase()}
    </div>
  );
}

export default BlogAuthorImage;
