import jwt from "jsonwebtoken";
import { DEVELOPMENT } from "./constants.js";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // in ms
    httpOnly: true, // Prevents XSS attacks: cross-site scripting
    sameSite: "strict", //CSRF attacks
    secure: process.env.NODE_ENV === DEVELOPMENT ? false : true, // determine https or http
  });

  return token;
};
