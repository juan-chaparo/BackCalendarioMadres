import { Router } from "express";
import { getTypesContribution } from "../controllers/typesContribution.controller";
const router = Router();

router.get("/typesContribution", getTypesContribution);

export default router;
