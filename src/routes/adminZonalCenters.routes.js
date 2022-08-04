import { Router } from "express";
import {
  createAdminZonalCenters,
  getAdminZonalCenters,
  updateAdminZonalCenters,
} from "../controllers/adminZonalCenters.controller";
const router = Router();

router.get("/adminZonalCenters", getAdminZonalCenters);

router.post("/adminZonalCenters", createAdminZonalCenters);

router.put("/adminZonalCenters", updateAdminZonalCenters);

export default router;
