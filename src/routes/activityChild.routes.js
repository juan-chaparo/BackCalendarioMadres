import { Router } from "express";
import { getActivityChild } from "../controllers/activityChild.controller";
const router = Router();

router.get("/activityChild", getActivityChild);

export default router;
