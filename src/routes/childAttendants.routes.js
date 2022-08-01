import { Router } from "express";
import { getChildAttendants } from "../controllers/childAttendants.controller";
const router = Router();

router.get("/childAttendants", getChildAttendants);

export default router;
