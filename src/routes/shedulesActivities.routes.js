import { Router } from "express";
import { getShedulesActivities } from "../controllers/shedulesActivities.controller";
const router = Router();

router.get("/shedulesActivities", getShedulesActivities);

export default router;
