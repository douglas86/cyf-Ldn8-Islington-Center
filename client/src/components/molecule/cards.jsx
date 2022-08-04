import { Link } from "react-router-dom";

import { youtubeVideos } from "./youtubeVideos";

import styles from "./styles.module.css";

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

export const teachersCards = (values) => {
  const { title, img_url, summary, video_url } = values;

  console.log("values", values);

  return (
    <>
      <h4>{title}</h4>
      <img className={styles.image_card} src={img_url} alt="avatar_img" />
      <p>{summary}</p>
      {youtubeVideos(video_url)}
      <button>Delete</button>
      <button>Edit</button>
    </>
  );
};
