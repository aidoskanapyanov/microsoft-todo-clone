import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../db";
import { createJwtTokens } from "../utils/jwt";

export const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        passwordHash: bcrypt.hashSync(password, 10),
      },
    });

    const { refreshToken, accessToken } = createJwtTokens(user, username);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(201).json({ accessToken });
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

    const { refreshToken, accessToken } = createJwtTokens(user, username);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.json({ accessToken });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

import jwt from "jsonwebtoken";

export const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  // if no refresh token, send 401 unauthorized
  if (!refreshToken) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    const { userId, username } = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    // if user doesn't exist, send 401 unauthorized
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const { accessToken } = createJwtTokens(user, username);

    res.json({ accessToken });
  } catch (e) {
    // if refresh token is expired, send 401 unauthorized
    if (e instanceof jwt.TokenExpiredError) {
      res.status(401).json({ error: "Refresh token expired. Sign in again" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  }
};
