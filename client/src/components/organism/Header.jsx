import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link className={styles.link} to="/">
          <h2>Islington Centre Learning Portal</h2>
        </Link>
      </div>

      <ul className={styles.nav_menu}>
        <Link className={styles.link} to="/lessons">
          <li>Lessons</li>
        </Link>
        <Link className={styles.link} to="/teacher">
          <li>Teacher</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
