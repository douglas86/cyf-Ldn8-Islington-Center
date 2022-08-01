import express from "express";
import { post } from "../controllers/lessonsControllers.js";

const router = express.Router();

router.post("/", (req, res) => post(req, res));

export default router;
