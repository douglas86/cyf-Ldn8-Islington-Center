import { useEffect, useState } from "react";
import axios from "axios";

import { cards } from "../molecule/cards";
import { spinner } from "../atom/spinner";

import styles from "./styles.module.css";

const Cards = () => {
  const [lessons, setLessons] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/lessons`)
      .then((items) => {
        setLessons(items.data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className={styles.cardContainer}>
      {Object.entries(lessons).map(([keys, values]) => (
        <div key={keys} className={styles.card}>
          {values ? cards(values) : spinner()}
        </div>
      ))}
    </div>
  );
};

export default Cards;
