import { Router } from "express";
import { getUds } from "../controllers/uds.controller";
const router = Router();

router.get("/uds", getUds);

export default router;
