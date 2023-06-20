import prisma from "../db";

// Get all
export const getTodos = async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json({ data: todos });
};

// Get one
export const getTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await prisma.todo.findUnique({
    where: { id: Number(id) },
  });
  res.json({ data: todo });
};
