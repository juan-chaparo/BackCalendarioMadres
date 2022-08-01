import { Router } from "express";
import { getAdminZonalCenters } from "../controllers/adminZonalCenters.controller";
const router = Router();

router.get("/adminZonalCenters", getAdminZonalCenters);

export default router;
