import { Router } from "express";
import {
  createCommunity,
  getCommunity,
  updateCommunity,
} from "../controllers/community.controller";
const router = Router();

router.get("/community", getCommunity);

router.post("/community", createCommunity);

router.put("/community", updateCommunity);

export default router;
