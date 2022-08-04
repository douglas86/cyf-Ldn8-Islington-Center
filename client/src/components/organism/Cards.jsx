import { useEffect, useState } from "react";
import axios from "axios";

import { lessonsCards, teachersCards } from "../molecule/cards";
import { spinner } from "../atom/spinner";

import styles from "./styles.module.css";

const Cards = () => {
  const [lessons, setLessons] = useState({});
  const path = window.location.pathname;

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
      {lessons
        ? Object.entries(lessons).map(([keys, values]) => (
            <div key={keys} className={styles.card}>
              {path === "/teacher"
                ? teachersCards(values)
                : lessonsCards(values)}
            </div>
          ))
        : spinner()}
    </div>
  );
};

export default Cards;
