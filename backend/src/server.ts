import cookieParser from "cookie-parser"; // library for parsing cookies
import cors from "cors"; // library for cross-origin resource sharing
import express from "express";
import morgan from "morgan"; // library for logging http requests
import { refreshAccessToken, signIn, signUp } from "./handlers/auth"; // handlers for authentication routes
import authenticateJWT from "./middlewares/jwtAuthMiddleware"; // middleware for authenticating jwt tokens
import router from "./router";

const app = express();

app.use(cors()); // allow all origins
app.use(morgan("dev")); // log status codes
app.use(express.json()); // parse json bodies (content-type: application/json)
app.use(express.urlencoded({ extended: true })); // parse urlencoded bodies (content-type: application/x-www-form-urlencoded)
app.use(cookieParser()); // parse cookies

app.get("/", (req, res, next) => {
  res.json({ message: "hi from server" });
});

app.use("/api", authenticateJWT, router);

app.post("/signup", signUp);
app.post("/signin", signIn);
app.post("/refresh_token", refreshAccessToken);

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: `had an error: ${err.message}` });
});

export default app;
