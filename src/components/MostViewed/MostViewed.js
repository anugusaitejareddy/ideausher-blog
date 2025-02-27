import blogsData from "../../constants/blogs-data.json";
import styles from "./MostViewed.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function MostViewed() {
  return (
    <div className={styles.mostViewedWrapper}>
      <h3>Popular Content</h3>
      <div>
        {blogsData
          .sort((a, b) => a.rating - b.rating)
          .slice(0, 7)
          .map((blog, index) => (
            <p key={index}>
              <FaArrowRight className={styles.arrowRight} />
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </p>
          ))}
      </div>
    </div>
  );
}

export default MostViewed;
