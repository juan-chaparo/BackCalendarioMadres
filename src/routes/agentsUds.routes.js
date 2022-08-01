import { Router } from "express";
import { getAgentsUds } from "../controllers/agentsUds.controller";
const router = Router();

router.get("/agentsUds", getAgentsUds);

export default router;
