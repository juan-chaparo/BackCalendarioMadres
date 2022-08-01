import { Router } from "express";
import { getAdmins } from "../controllers/admins.controller";
const router = Router();

router.get("/admins", getAdmins);

export default router;
