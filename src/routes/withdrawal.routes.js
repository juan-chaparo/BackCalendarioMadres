import { Router } from "express";
import {
  createWithdrawal,
  getWithdrawal,
  updateWithdrawal,
} from "../controllers/withdrawal.controller";
const router = Router();

router.get("/withdrawal", getWithdrawal);

router.post("/withdrawal", createWithdrawal);

router.put("/withdrawal", updateWithdrawal);

export default router;
