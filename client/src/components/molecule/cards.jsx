import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export const cards = (values) => {
  const { id, title, img_url, summary } = values;
  return (
    <>
      <span>{title}</span>
      <img className={styles.image_card} src={img_url} alt="avatar_img" />
      <p className={styles.desc}>{summary}</p>
      <button className={styles.cardButton}>
        <Link className={styles.link} to={`/lessons/${id}`}>
          View Lesson
        </Link>{" "}
      </button>
    </>
  );
};
