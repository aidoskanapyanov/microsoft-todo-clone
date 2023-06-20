import * as dotenv from "dotenv";
dotenv.config(); // load .env file

import app from "./server";

app.listen(3000, () => {
  console.log("⚡ Server started at http://localhost:3000");
});
