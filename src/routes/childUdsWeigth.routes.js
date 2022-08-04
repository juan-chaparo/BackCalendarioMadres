import { Router } from "express";
import {
  createChildUdsWeigth,
  getChildUdsWeigth,
  updateChildUdsWeigth,
} from "../controllers/childUdsWeigth.controller";
const router = Router();

router.get("/childUdsWeigth", getChildUdsWeigth);

router.post("/childUdsWeigth", createChildUdsWeigth);

router.put("/childUdsWeigth", updateChildUdsWeigth);

export default router;
