import { Router } from "express";
import { createUds, getUds, updateUds } from "../controllers/uds.controller";
const router = Router();

router.get("/uds", getUds);

router.post("/uds", createUds);

router.put("/uds", updateUds);

export default router;
