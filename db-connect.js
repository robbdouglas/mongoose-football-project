// db-connect.js

import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB could not connect");
  }
};

connectMongoDB();

export default connectMongoDB;
