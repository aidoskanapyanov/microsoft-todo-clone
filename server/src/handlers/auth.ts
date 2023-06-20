import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../db";

export const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        passwordHash: bcrypt.hashSync(password, 10),
      },
    });
    res.status(201).json({ data: { userId: user.id, username } });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        res.status(400).json({ error: "Username already exists" });
      }
    }
  }
};

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      res.status(400).json({ error: "Invalid username or password" });
      return;
    }
    const passwordMatch = bcrypt.compareSync(password, user.passwordHash);
    if (!passwordMatch) {
      res.status(400).json({ error: "Invalid username or password" });
      return;
    }
    res.status(200).json({ data: { userId: user.id, username } });
  } catch (e) {
    console.log(e);
  }
};
