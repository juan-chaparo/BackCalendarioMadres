import { Router } from "express";
import {
  createChildUds,
  getChildUds,
  updateChildUds,
} from "../controllers/childUds.controller";
const router = Router();

router.get("/childUds", getChildUds);

router.post("/childUds", createChildUds);

router.put("/childUds", updateChildUds);

export default router;
