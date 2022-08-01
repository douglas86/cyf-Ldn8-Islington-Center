import styles from "./styles.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.showcase}>
        <div className={styles.container}>
          <h1>Islington Center for Refugees and Migrants</h1>
          <p className={`${styles.lead} ${styles.hide_on_small}`}>
            Welcoming and supporting Refugees, Asylum seekers, and migrants in
            our community
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
