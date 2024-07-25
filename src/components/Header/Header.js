import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <h1>Blogs</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
