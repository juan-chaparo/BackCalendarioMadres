import { Router } from "express";
import { getChildUds } from "../controllers/childUds.controller";
const router = Router();

router.get("/childUds", getChildUds);

export default router;
