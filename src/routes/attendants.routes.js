import { Router } from "express";
import {
  createAttendants,
  getattendants,
  updateAttendants,
} from "../controllers/attendants.controller";
const router = Router();

router.get("/attendants", getattendants);

router.post("/attendants", createAttendants);

router.put("/attendants", updateAttendants);

export default router;
