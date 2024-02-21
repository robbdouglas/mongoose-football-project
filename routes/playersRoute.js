// playersRoute.js

import express from "express";
import { getAllPlayers, addPlayer } from "../controllers/playersControllers.js";

const playersRouter = express.Router();

playersRouter.get("/", getAllPlayers).post("/", addPlayer);

export { playersRouter };
