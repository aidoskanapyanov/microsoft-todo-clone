import { Router } from "express";
import { readOneTodo, readAllTodos } from "./handlers/todos";

const router = Router();

/**
 * Todo
 */
router.get("/todos", readAllTodos); // read all
router.get("/todos/:id", readOneTodo); // read one

export default router;
