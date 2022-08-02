import { useState, useEffect } from "react";
import MarkDown from "markdown-to-jsx";

import styles from "./styles/Home.module.css";

const Home = () => {
  const [landing, setLanding] = useState("");
  const file_name = "landing.md";

  useEffect(() => {
    import(`../components/template/markdown/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setLanding(res));
      })
      .catch((error) => console.log(error.message));
  });
  return (
    <>
      <div className={styles.showcase}>
        <div className={styles.container}>
          <h1>Islington Center for Refugees and Migrants</h1>
          <p className={`lead ${styles.hide_on_small}`}>
            Welcoming and supporting Refugees, Asylum seekers, and migrants in
            our community
          </p>
        </div>
      </div>
      <div className={styles.home_content}>
        <MarkDown>{landing}</MarkDown>
      </div>
    </>
  );
};

export default Home;
