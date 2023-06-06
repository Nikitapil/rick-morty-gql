import { Link } from "react-router-dom";
import styles from "./error-page.module.scss";

export const ErrorPage = () => {
  return (
    <div className="container">
      <div className={styles["error-page"]}>
        <p className={styles.numbers}>404</p>
        <div className={styles.info}>
          <p className={styles.text}>Page not found</p>
          <Link className={styles.link} to="/">
            Go to main
          </Link>
        </div>
      </div>
    </div>
  );
};
