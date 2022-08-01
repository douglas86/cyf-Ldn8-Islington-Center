import express from "express";
import {
  del,
  get,
  getById,
  post,
  put,
} from "../controllers/lessonsControllers.js";

const router = express.Router();

router.get("/", (req, res) => get(req, res));
router.get("/:lessonId", (req, res) => getById(req, res));
router.post("/", (req, res) => post(req, res));
router.put("/:lessonId", (req, res) => put(req, res));
router.delete("/:lessonId", (req, res) => del(req, res));

export default router;
