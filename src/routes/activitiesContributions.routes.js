import { Router } from "express";
import {
  createActivitiesContributions,
  getActivitiesContributions,
  updateActivitiesContributions,
} from "../controllers/activitiesContributions.controller";
const router = Router();

router.get("/activitiesContributions", getActivitiesContributions);

router.post("/activitiesContributions", createActivitiesContributions);

router.put("/activitiesContributions", updateActivitiesContributions);

export default router;
