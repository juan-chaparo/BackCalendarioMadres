import { Router } from "express";
import {
  createActivityChild,
  getActivityChild,
  updateActivityChild,
} from "../controllers/activityChild.controller";
const router = Router();

router.get("/activityChild", getActivityChild);

router.post("/activityChild", createActivityChild);

router.put("/activityChild", updateActivityChild);

export default router;
