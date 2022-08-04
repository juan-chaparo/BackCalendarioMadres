import { Router } from "express";
import {
  createChildAttendants,
  getChildAttendants,
  updateChildAttendants,
} from "../controllers/childAttendants.controller";
const router = Router();

router.get("/childAttendants", getChildAttendants);

router.post("/childAttendants", createChildAttendants);

router.put("/childAttendants", updateChildAttendants);

export default router;
