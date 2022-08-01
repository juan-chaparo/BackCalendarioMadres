import { Router } from "express";
import { getZonalCenters } from "../controllers/zonalCenters.controller";
const router = Router();

router.get("/zonalCenters", getZonalCenters);

export default router;
