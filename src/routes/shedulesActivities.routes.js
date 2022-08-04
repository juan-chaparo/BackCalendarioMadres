import { Router } from "express";
import {
  createShedulesActivities,
  getShedulesActivities,
  updateShedulesActivities,
} from "../controllers/shedulesActivities.controller";
const router = Router();

router.get("/shedulesActivities", getShedulesActivities);

router.post("/shedulesActivities", createShedulesActivities);

router.put("/shedulesActivities", updateShedulesActivities);

export default router;
