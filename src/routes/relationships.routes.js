import { Router } from "express";
import { getRelationships } from "../controllers/relationships.controller";
const router = Router();

router.get("/relationships", getRelationships);

export default router;
