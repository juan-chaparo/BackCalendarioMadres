import { Router } from "express";
import {
  createUsers,
  getUsers,
  updateUsers,
} from "../controllers/users.controller";
const router = Router();

router.get("/users", getUsers);

router.post("/users", createUsers);

router.put("/users", updateUsers);

export default router;
