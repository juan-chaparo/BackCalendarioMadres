import { Router } from "express";
import { getAgentsCommunity } from "../controllers/agentsCommunity.controller";
const router = Router();

router.get("/agentsCommunity", getAgentsCommunity);

export default router;
