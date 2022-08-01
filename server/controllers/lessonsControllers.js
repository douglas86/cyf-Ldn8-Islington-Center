import { pool } from "../lib/pool.js";

import { thenService } from "../services/thenService.js";
import { catchService } from "../services/catchService.js";

export const get = (req, res) => {
  pool
    .query(`SELECT * FROM lessons ORDER BY id`)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => catchService(res, err));
};

export const getById = (req, res) => {
  const id = req.params.lessonId;
  const query = `SELECT * FROM lessons WHERE id = $1`;
  pool
    .query(query, [id])
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => catchService(res, err));
};

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

export const del = (req, res) => {
  const id = req.params.lessonId;
  const query = `SELECT * FROM lessons WHERE id = $1`;
  pool.query(query, [id]).then((result) => {
    if (result.rows.length > 0) {
      pool
        .query(`DELETE FROM lessons WHERE id=$1`, [id])
        .then(() => thenService(res, "Lesson Deleted"))
        .catch((err) => catchService(res, err));
    }
  });
};
