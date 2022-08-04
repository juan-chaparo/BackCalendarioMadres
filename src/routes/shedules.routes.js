import { Router } from "express";
import {
  createShedules,
  getShedules,
  updateShedules,
} from "../controllers/shedules.controller";
const router = Router();

router.get("/shedules", getShedules);

router.post("/shedules", createShedules);

router.put("/shedules", updateShedules);

export default router;
