import { Router } from "express";
import { getTodo, getTodos } from "./handlers/todos";

const router = Router();

/**
 * Todo
 */
router.get("/todos", getTodos); // get all
router.get("/todos/:id", getTodo); // get one

export default router;
