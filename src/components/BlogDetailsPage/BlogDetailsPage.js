import { useParams } from "react-router-dom";
import React from "react";
import blogsData from "../../constants/blogs-data.json";
import styles from "./BlogDetailsPage.module.css";

function BlogDetailsPage() {
  const { id } = useParams();
  const [blog] = blogsData.filter((blog) => blog.id === parseInt(id));
  const headingRef = React.useRef();
  const tocRef = React.useRef();

  React.useEffect(() => {
    const options = {
      root: null,
      threshold: 0.6,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const subHeadings = tocRef.current;
        if (entry.isIntersecting) {
          subHeadings
            ?.querySelector(`#${entry.target.id}`)
            .classList.add(styles.active);
        } else {
          subHeadings
            ?.querySelector(`#${entry.target.id}`)
            .classList.remove(styles.active);
        }
      });
    }, options);
    const listNode = headingRef.current;
    const sections = listNode.querySelectorAll("section");

    sections.forEach((element) => observer.observe(element));
  }, []);

  function handleTOCClick(id) {
    const sectionList = headingRef.current;
    const targetNode = sectionList.querySelector(`#${id}`);
    targetNode.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, `#${id}`);
  }

  return (
    <div className={styles.blogDetailsWrapper}>
      <div className={styles.blogDetailsHero}>
        <p>{blog.tags.join(", ")}</p>
        <h1>{blog.title}</h1>
        <p>By {blog.author}</p>
      </div>
      <div className={styles.blogDetailsContentContainer}>
        <div className={styles.blogDetailsContent} ref={headingRef}>
          {blog.content.map((data, index) => {
            const regex = /[\s!$%^&*()_+|~=`{}\\[\]:";'<>?,./]/g;

            return (
              <section
                key={index}
                id={data.name.toLowerCase().replaceAll(regex, "-")}
              >
                <h2 id={data.name.toLowerCase().replaceAll(regex, "-")}>
                  {data.name}
                </h2>
                {data.subTopicData.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </section>
            );
          })}
        </div>

        <div className={styles.blogDetailsSubHeadings} ref={tocRef}>
          <h2>Table Of contents</h2>
          {blog.content.map((data, index) => {
            const regex = /[\s!$%^&*()_+|~=`{}\\[\]:";'<>?,./]/g;
            const id = data.name.toLowerCase().replaceAll(regex, "-");
            return (
              <p
                id={id}
                key={index}
                className={styles.subHeadingContentTitle}
                onClick={() => handleTOCClick(id)}
              >
                {data.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;

// // "callbacks",
//       "create your own promises",
//       "asyn await",
//       "chaining promises ",
//       "rejected promises",
//       "passing data"
