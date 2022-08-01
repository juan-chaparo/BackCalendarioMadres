import { Router } from "express";
import { getattendants } from "../controllers/attendants.controller";
const router = Router();

router.get("/attendants", getattendants);

export default router;
