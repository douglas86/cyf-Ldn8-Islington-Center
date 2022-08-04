import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { youtubeVideos } from "./youtubeVideos";

import styles from "./styles.module.css";
import { handleDelete } from "../atom/handlers/handleDelete";

export const lessonsCards = (values) => {
  const { id, title, img_url, summary } = values;
  return (
    <>
      <h4>{title}</h4>
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

export const teachersCards = (values, updateData) => {
  const { id, title, img_url, summary, video_url } = values;

  return (
    <>
      <h4>{title}</h4>
      <img className={styles.image_card} src={img_url} alt="avatar_img" />
      <p>{summary}</p>
      {youtubeVideos(video_url)}
      <Button
        variant="danger"
        className={styles.cardButton}
        onClick={() => handleDelete(`lessons/${id}`, updateData)}
      >
        Delete
      </Button>
      <Button variant="success" className={styles.cardButton}>
        Edit
      </Button>
    </>
  );
};
