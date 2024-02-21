// server.js

import dotenv from "dotenv";
import express from "express";
import "./db-connect.js";
import { playersRouter } from "./routes/playersRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

// _______________ROUTES____________________

app.use("/players", playersRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// _______________PORT & LISTEN____________________

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});

