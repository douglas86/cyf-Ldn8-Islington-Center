import { toEmbeddedId } from "../atom/toEmbeddedId";

import styles from "./styles.module.css";

export const youtubeVideos = (video) => (
  <iframe
    className={styles.iframe}
    src={`https://www.youtube.com/embed/${toEmbeddedId(video)}`}
    title="YouTube video player"
  />
);
