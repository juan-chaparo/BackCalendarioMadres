import { Router } from "express";
import { getTracingChild } from "../controllers/tracingChild.controller";
const router = Router();

router.get("/tracingChild", getTracingChild);

export default router;
