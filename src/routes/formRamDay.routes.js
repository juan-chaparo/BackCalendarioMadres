import { Router } from "express";
import {
  createFormRamDay,
  getFormRamDay,
  updateFormRamDay,
} from "../controllers/formRamDay.controller";
const router = Router();

router.get("/formRamDay", getFormRamDay);

router.post("/formRamDay", createFormRamDay);

router.put("/formRamDay", updateFormRamDay);

export default router;
