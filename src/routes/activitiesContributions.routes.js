import { Router } from "express";
import { getActivitiesContributions } from "../controllers/activitiesContributions.controller";
const router = Router();

router.get("/activitiesContributions", getActivitiesContributions);

export default router;
