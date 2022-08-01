import { Router } from "express";
import { getActivities } from "../controllers/activities.controller";
const router = Router();

router.get("/activities", getActivities);

export default router;
