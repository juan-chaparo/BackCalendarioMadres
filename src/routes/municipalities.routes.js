import { Router } from "express";
import { getMunicipalities } from "../controllers/municipalities.controller";
const router = Router();

router.get("/municipalities", getMunicipalities);

export default router;
