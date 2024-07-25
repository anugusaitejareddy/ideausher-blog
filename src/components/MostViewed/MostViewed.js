import blogsData from "../../constants/blogs-data.json";
import styles from "./MostViewed.module.css";

function MostViewed() {
  return (
    <div className={styles.mostViewedWrapper}>
      <h3>Popular Content</h3>
      <div>
        {blogsData.map((blog) => (
          <p key={blog.id}>{blog.title}</p>
        ))}
      </div>
    </div>
  );
}

export default MostViewed;
