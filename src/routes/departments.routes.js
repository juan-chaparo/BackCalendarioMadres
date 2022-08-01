import { Router } from "express";
import { getDepartments } from "../controllers/departments.controller";
const router = Router();

router.get("/departments", getDepartments);

export default router;
