import { Router } from "express";
import {
  createAdmins,
  getAdmins,
  updateAdmins,
} from "../controllers/admins.controller";
const router = Router();

router.get("/admins", getAdmins);

router.post("/admins", createAdmins);

router.put("/admins", updateAdmins);

export default router;
