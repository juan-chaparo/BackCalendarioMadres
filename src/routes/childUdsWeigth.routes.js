import { Router } from "express";
import { getChildUdsWeigth } from "../controllers/childUdsWeigth.controller";
const router = Router();

router.get("/childUdsWeigth", getChildUdsWeigth);

export default router;
