import { Router } from "express";
import { getDiary } from "../controllers/diary.controller";
const router = Router();

router.get("/diary", getDiary);

export default router;
