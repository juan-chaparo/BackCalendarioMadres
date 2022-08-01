import { Router } from "express";
import { getPopulationTypes } from "../controllers/populationTypes.controller";
const router = Router();

router.get("/populationTypes", getPopulationTypes);

export default router;
