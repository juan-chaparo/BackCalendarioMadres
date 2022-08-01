import { Router } from "express";
import {getCommunity} from "../controllers/community.controller";
const router = Router();

router.get("/community",getCommunity);

export default router;
