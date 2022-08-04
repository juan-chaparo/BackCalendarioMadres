import { Router } from "express";
import {
  createActivitiesMaterials,
  getActivitiesMaterials,
  updateActivitiesMaterials,
} from "../controllers/activitiesMaterials.controller";
const router = Router();

router.get("/activitiesMaterials", getActivitiesMaterials);

router.post("/activitiesMaterials", createActivitiesMaterials);

router.put("/activitiesMaterials", updateActivitiesMaterials);

export default router;
