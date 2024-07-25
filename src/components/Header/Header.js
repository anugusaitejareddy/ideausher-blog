import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <h1>
        <Link to="/">Blogs</Link>
      </h1>
    </div>
  );
}

export default Header;
