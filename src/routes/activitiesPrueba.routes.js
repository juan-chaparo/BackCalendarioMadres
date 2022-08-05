import { Router } from "express";
import { getPrueba } from "../controllers/activitiesPrueba.controller";
const router = Router();

router.get("/activitiesPrueba", getPrueba);

export default router;
