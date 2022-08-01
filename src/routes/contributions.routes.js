import { Router } from "express";
import { getContributions } from "../controllers/contributions.controller";
const router = Router();

router.get("/contributions", getContributions);

export default router;
