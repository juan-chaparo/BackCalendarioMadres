import { Router } from "express";
import { getEducationLevels } from "../controllers/educationsLevels.controller";
const router = Router();

router.get("/educationLevels", getEducationLevels);

export default router;
