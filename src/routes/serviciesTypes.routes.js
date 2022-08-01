import { Router } from "express";
import { getServiciesTypes } from "../controllers/serviciesTypes.contoller";
const router = Router();

router.get("/serviciesTypes", getServiciesTypes);

export default router;
