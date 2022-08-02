import { Router } from "express";
import {
  createActivitiesContributions,
  getActivitiesContributions,
} from "../controllers/activitiesContributions.controller";
const router = Router();

router.get("/activitiesContributions", getActivitiesContributions);

router.post("/activitiesContributions", createActivitiesContributions);

export default router;
