import { pool } from "../lib/pool.js";

import { thenService } from "../services/thenService.js";
import { catchService } from "../services/catchService.js";

export const post = (req, res) => {
  const { title, img_url, intro, summary, content, video_url } = req.body;
  const query = `INSERT INTO lessons (title, img_url, intro, summary, content, video_url) VALUES ($1,$2,$3,$4,$5,$6)`;
  pool
    .query(query, [title, img_url, intro, summary, content, video_url])
    .then(() => thenService(res, "Lesson Created"))
    .catch((err) => catchService(res, err));
};

export const put = (req, res) => {
  const id = req.params.lessonId;
  const { title, img_url, intro, summary, content, video_url } = req.body;
  const query = `UPDATE lessons SET title = $1, img_url=$2, intro=$3, summary=$4, content=$5, video_url=$6 WHERE id=$7`;
  pool
    .query(query, [title, img_url, intro, summary, content, video_url, id])
    .then(() => thenService(res, "Lesson Updated"))
    .catch((err) => catchService(res, err));
};
