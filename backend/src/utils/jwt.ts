import jwt from "jsonwebtoken";

export function createJwtTokens(user, username: any) {
  const accessToken = jwt.sign(
    { userId: user.id, username },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );

  const refreshToken = jwt.sign(
    { userId: user.id, username },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
  return { refreshToken, accessToken };
}
