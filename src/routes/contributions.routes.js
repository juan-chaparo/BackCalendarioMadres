import { Router } from "express";
import {
  createContributions,
  getContributions,
  updateContributions,
} from "../controllers/contributions.controller";
const router = Router();

router.get("/contributions", getContributions);

router.post("/contributions", createContributions);

router.put("/contributions", updateContributions);

export default router;
