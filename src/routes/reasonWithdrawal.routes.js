import { Router } from "express";
import { getReasonWithdrawal } from "../controllers/reasonWithdrawal.controller";
const router = Router();

router.get("/reasonWithdrawal", getReasonWithdrawal);

export default router;
