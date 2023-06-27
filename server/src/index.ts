import * as dotenv from "dotenv";
dotenv.config({ path: ".env" }); // override with .env file if present
dotenv.config({ path: ".env.example" }); // load .env.example file for default values

import app from "./server";

app.listen(3000, () => {
  console.log("⚡ Server started at http://localhost:3000");
});
