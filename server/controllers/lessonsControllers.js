import { pool } from "../lib/pool.js";

import { thenService } from "../services/thenService.js";
import { catchService } from "../services/catchService.js";

export const get = async (req, res) => {
  await pool
    .query(`SELECT * FROM lessons ORDER BY id`)
    .then(async (result) => await res.status(200).json(result.rows))
    .catch((err) => catchService(res, err));
};

export const getById = async (req, res) => {
  const id = req.params.lessonId;
  const query = `SELECT * FROM lessons WHERE id = $1`;
  await pool
    .query(query, [id])
    .then(async (result) => await res.status(200).json(result.rows))
    .catch((err) => catchService(res, err));
};

export const post = async (req, res) => {
  const { title, img_url, intro, summary, content, video_url } = req.body;
  const query = `INSERT INTO lessons (title, img_url, intro, summary, content, video_url) VALUES ($1,$2,$3,$4,$5,$6)`;
  await pool
    .query(query, [title, img_url, intro, summary, content, video_url])
    .then(async () => await thenService(res, "Lesson Created"))
    .catch(async (err) => await catchService(res, err));
};

export const put = async (req, res) => {
  const id = req.params.lessonId;
  const { title, img_url, intro, summary, content, video_url } = req.body;
  const query = `UPDATE lessons SET title = $1, img_url=$2, intro=$3, summary=$4, content=$5, video_url=$6 WHERE id=$7`;
  await pool
    .query(query, [title, img_url, intro, summary, content, video_url, id])
    .then(async () => await thenService(res, "Lesson Updated"))
    .catch(async (err) => await catchService(res, err));
};

export const del = async (req, res) => {
  const id = req.params.lessonId;
  const query = `SELECT * FROM lessons WHERE id = $1`;
  await pool.query(query, [id]).then(async (result) => {
    if (result.rows.length > 0) {
      await pool
        .query(`DELETE FROM lessons WHERE id=$1`, [id])
        .then(async () => await thenService(res, "Lesson Deleted"))
        .catch(async (err) => await catchService(res, err));
    }
  });
};
