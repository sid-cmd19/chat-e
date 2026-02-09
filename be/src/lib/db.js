import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;

    if (!MONGO_URI) throw new Error("Mongo URI is not set");

    const conn = await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully: ", conn.connection.host); //a property that retrieves the hostname of the MongoDB instance from an established database connection
  } catch (error) {
    console.log("Error connection to Mongo DB: ", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};
