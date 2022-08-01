import { Router } from "express";
import { getWithdrawal } from "../controllers/withdrawal.controller";
const router = Router();

router.get("/withdrawal", getWithdrawal);

export default router;
