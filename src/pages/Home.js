import BlogHero from "../components/BlogHero";
import BlogsGrid from "../components/BlogsGrid";
import MostViewed from "../components/MostViewed";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <BlogHero />
      <div className={styles.blogsWrapper}>
        <BlogsGrid />
        <MostViewed />
      </div>
    </div>
  );
}

export default Home;
