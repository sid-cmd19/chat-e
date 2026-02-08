import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully: ", conn.connection.host); //a property that retrieves the hostname of the MongoDB instance from an established database connection
  } catch (error) {
    console.log("Error connection to Mongo DB: ", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};
