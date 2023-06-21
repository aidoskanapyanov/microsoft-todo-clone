import prisma from "../db";

// Read all
export const readAllTodos = async (req, res) => {
  const userId = req.user.userId;

  const todos = await prisma.todo.findMany({
    where: { userId },
  });

  res.json({ data: todos });
};

// Read one
export const readOneTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const todo = await prisma.todo.findFirst({
    where: {
      AND: [{ id: Number(id) }, { userId }],
    },
  });

  res.json({ data: todo });
};
