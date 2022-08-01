import { Router } from "express";
import { getFormRamDay } from "../controllers/formRamDay.controller";
const router = Router();

router.get("/formRamDay", getFormRamDay);

export default router;
