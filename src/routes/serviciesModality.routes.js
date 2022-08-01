import { Router } from "express";
import { getServiciesModality } from "../controllers/serviciesModality.controller";
const router = Router();

router.get("/serviciesModality", getServiciesModality);

export default router;
