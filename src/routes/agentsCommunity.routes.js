import { Router } from "express";
import {
  createAgentsCommunity,
  getAgentsCommunity,
  updateAgentsCommunity,
} from "../controllers/agentsCommunity.controller";
const router = Router();

router.get("/agentsCommunity", getAgentsCommunity);

router.post("/agentsCommunity", createAgentsCommunity);

router.put("/agentsCommunity", updateAgentsCommunity);

export default router;
