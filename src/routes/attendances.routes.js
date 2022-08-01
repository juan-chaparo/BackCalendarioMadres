import { Router } from "express";
import { getAllAttendances } from "../controllers/attendances.controller";
const router = Router();

router.get("/attendances", getAllAttendances);

export default router;
