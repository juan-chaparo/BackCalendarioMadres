import { Router } from "express";
import { getActivitiesMaterials } from "../controllers/activitiesMaterials.controller";
const router = Router();

router.get("/activitiesMaterials", getActivitiesMaterials);

export default router;
