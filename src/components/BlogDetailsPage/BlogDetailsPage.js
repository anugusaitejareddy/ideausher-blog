import { useParams } from "react-router-dom";
import blogsData from "../../constants/blogs-data.json";
import styles from "./BlogDetailsPage.module.css";

function BlogDetailsPage() {
  const { id } = useParams();
  const [blog] = blogsData.filter((blog) => blog.id === parseInt(id));

  function appendHeadingToContent(headings, content) {
    let res = [...Array(headings.length * 2)];
    for (let i = 0, j = 0; i < res.length; i += 2, j++) {
      res[i] = headings[j];
      res[i + 1] = content[j];
    }
    console.log(res);
    return res;
  }

  return (
    <div className={styles.blogDetailsWrapper}>
      <div className={styles.blogDetailsHero}>
        <p>{blog.tags.join(", ")}</p>
        <h1>{blog.title}</h1>
        <p>By {blog.author}</p>
      </div>
      <div className={styles.blogDetailsContentWrapper}>
        <div>
          <img src={blog.imageURL} alt="" />
          <div className={styles.blogDetailsContent}>
            {appendHeadingToContent(blog.subHeadings, blog.content).map(
              (p, index) =>
                index % 2 === 0 ? (
                  <h2 id={p.replace(" ", "-")}>{p}</h2>
                ) : (
                  <p>{p}</p>
                )
            )}
          </div>
        </div>
        {/* <div className={styles.blogDetailsSubHeadings}>
          {blog.subHeadings.map((subHeading) => (
            <a href={"#" + subHeading.replace(" ", "-")}>{subHeading}</a>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default BlogDetailsPage;
