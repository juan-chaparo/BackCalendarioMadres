import { Router } from "express";
import {
  createTracingChild,
  getTracingChild,
  updateTracingChild,
} from "../controllers/tracingChild.controller";
const router = Router();

router.get("/tracingChild", getTracingChild);

router.post("/tracingChild", createTracingChild);

router.put("/tracingChild", updateTracingChild);

export default router;
