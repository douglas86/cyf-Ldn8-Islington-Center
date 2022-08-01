import express from "express";
import { pool } from "../lib/pool.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { title, img_url, intro, summary, content, video_url } = req.body;
  console.log("title", title);
  pool
    .query(
      `INSERT INTO lessons (title,  img_url, intro, summary, content, video_url) VALUES ($1,$2,$3,$4,$5,$6)`,
      [title, img_url, intro, summary, content, video_url]
    )
    .then(() => res.status(200).send("Lesson created."))
    .catch((err) => res.status(500).json(err));
});

export default router;
