import { Router } from "express";
import {
  createZonalCenters,
  getZonalCenters,
  updateZonalCenters,
} from "../controllers/zonalCenters.controller";
const router = Router();

router.get("/zonalCenters", getZonalCenters);

router.post("/zonalCenters", createZonalCenters);

router.put("/zonalCenters", updateZonalCenters);

export default router;
