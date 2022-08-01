import express from "express";
import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";

const router = express.Router();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

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
