let todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Description 2",
    completed: false,
  },
];

// Get all
export const getTodos = async (req, res) => {
  res.json({ data: todos });
};

// Get one
export const getTodo = async (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === Number(id));
  res.json({ data: todo });
};
