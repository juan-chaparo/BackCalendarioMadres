import { Router } from "express";
import { getAspects } from "../controllers/aspects.controller";
const router = Router();

router.get("/aspects", getAspects);

export default router;
