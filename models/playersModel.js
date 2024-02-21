// playersModel.js

import { model, Schema } from "mongoose";

const playersSchema = new Schema({
  playerName: String,
  email: String,
  age: Number,
});

export const Player = model("player", playersSchema);
