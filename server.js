// server.js

import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json());

// _______________ROUTES____________________

app.get("/", (req, res) => {
  res.send("Hello World");
});

// _______________PORT & LISTEN____________________

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});
