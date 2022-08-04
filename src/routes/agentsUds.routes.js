import { Router } from "express";
import {
  createAgentsUds,
  getAgentsUds,
  updateAgentsUds,
} from "../controllers/agentsUds.controller";
const router = Router();

router.get("/agentsUds", getAgentsUds);

router.post("/agentsUds", createAgentsUds);

router.put("/agentsUds", updateAgentsUds);

export default router;
