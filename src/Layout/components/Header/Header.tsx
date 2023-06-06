import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container w-100">
        <div className={styles.header__container}>
          <Link className={styles.header__title} to="/">
            <h1>
              Rick and Morty <span>wiki</span>
            </h1>
          </Link>
          <nav>
            <ul className={styles["header__nav-list"]}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles["current-link"] : styles["nav-link"]
                  }
                  to="/characters"
                >
                  Characters
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles["current-link"] : styles["nav-link"]
                  }
                  to="/locations"
                >
                  Locations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles["current-link"] : styles["nav-link"]
                  }
                  to="/episodes"
                >
                  Episodes
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
