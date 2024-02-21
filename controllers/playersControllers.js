// playersControllers.js

import { Player } from "../models/playersModel.js";

export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};

export const addPlayer = async (req, res) => {
  try {
    const { playerName, email, age } = req.body;
    await Player.create({ playerName, email, age });
    res.json({ message: "Player added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};
