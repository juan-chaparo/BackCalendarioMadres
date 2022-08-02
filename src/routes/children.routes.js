import { Router } from "express";
import {
  createNewChildren,
  getChildren,
  getChildrenById,
  updateChildrenId,
} from "../controllers/children.controller";
const router = Router();

router.post("/children", createNewChildren);

router.get("/children", getChildrenById);

router.put("/children", updateChildrenId);

export default router;
