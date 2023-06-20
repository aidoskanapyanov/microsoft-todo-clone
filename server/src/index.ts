import * as dotenv from "dotenv";
dotenv.config(); // load .env file

import app from "./server";

app.listen(3000, () => {
  console.log("hello on http://localhost:3000");
});
