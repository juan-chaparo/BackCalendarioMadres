import { Router } from "express";
import {
  createDiary,
  getDiary,
  updateDiary,
} from "../controllers/diary.controller";
const router = Router();

router.get("/diary", getDiary);

router.post("/diary", createDiary);

router.put("/diary", updateDiary);

export default router;
