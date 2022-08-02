import { Router } from "express";
import { getLenguage } from "../controllers/lenguage.controller";
const router = Router();

router.get("/lenguage", getLenguage);

export default router;
