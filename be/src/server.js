// const express = require('express');

import express from "express";
import cookieParser from "cookie-parser"
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";

const app = express();
const __dirname = path.resolve();

const port = ENV.PORT || 3000;

app.use(express.json()); // will be in req.body
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../ui/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../ui", "dist", "index.html"));
  });
}

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to mongoDB: ", error);
    process.exit(1);
  });
