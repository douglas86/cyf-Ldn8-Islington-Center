import express from "express";
import { del, get, post, put } from "../controllers/questionsControllers.js";

const router = express.Router();

router.post("/", (req, res) => post(req, res));
router.get("/lessons/:lessonId", (req, res) => get(req, res));
router.put("/", (req, res) => put(req, res));
router.delete("/:questionId", (req, res) => del(req, res));

export default router;
