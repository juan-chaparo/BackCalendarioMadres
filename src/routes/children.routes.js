import { Router } from "express";
import {
  createNewChildren,
  getChildren,
  getChildrenById,
  updateChildrenId,
} from "../controllers/children.controller";
const router = Router();

router.get("/children", getChildren);

router.post("/children", createNewChildren);

router.get("/childrenSearch", getChildrenById);

router.put("/children/:id", updateChildrenId);

export default router;
