import { Router } from "express";
import {
  createActivities,
  getActivities,
  updateActivities,
} from "../controllers/activities.controller";
const router = Router();

router.get("/activities", getActivities);

router.post("/activities", createActivities);

router.put("/activities", updateActivities);

export default router;
