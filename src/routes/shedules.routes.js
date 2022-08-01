import { Router } from "express";
import { getShedules } from "../controllers/shedules.controller";
const router = Router();

router.get("/shedules", getShedules);

export default router;
