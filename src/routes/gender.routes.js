import { Router } from "express";
import { getGender } from "../controllers/gender.controller";
const router = Router();

router.get("/gender", getGender);

export default router;
