import styles from "../assets/styles/main.module.scss";

export const MainPage = () => {
  return (
    <div className="container">
      <div className={styles.page}>
        <h2 className={styles.title}>Rick And Morty</h2>
        <p className={styles.description}>
          Wiki about Rick and Morty. There you can find information about
          characters, locations or episodes in Rick and Morty universe
        </p>
      </div>
    </div>
  );
};
