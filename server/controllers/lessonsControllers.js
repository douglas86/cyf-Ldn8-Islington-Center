import { pool } from "../lib/pool.js";

import { thenService } from "../services/thenService.js";
import { catchService } from "../services/catchService.js";

export const post = (req, res) => {
  const { title, img_url, intro, summary, content, video_url } = req.body;
  const query = `INSERT INTO lessons (title, img_url, intro, summary, content, video_url) VALUES ($1,$2,$3,$4,$5,$6)`;
  pool
    .query(query, [title, img_url, intro, summary, content, video_url])
    .then(() => thenService(res))
    .catch((err) => catchService(res, err));
};
