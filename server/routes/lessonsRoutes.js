import express from "express";
import { post, put } from "../controllers/lessonsControllers.js";

const router = express.Router();

router.post("/", (req, res) => post(req, res));
router.put("/:lessonId", (req, res) => put(req, res));

export default router;
