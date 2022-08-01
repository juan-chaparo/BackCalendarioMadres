import { Router } from "express";
import { getDocsTypes } from "../controllers/docsTypes.controller";
const router = Router();

router.get("/docsTypes", getDocsTypes);

export default router;
