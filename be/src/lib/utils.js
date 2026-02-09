import jwt from "jsonwebtoken";
import { DEVELOPMENT, JWT_COOKIE_KEY } from "./constants.js";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET, NODE_ENV } = ENV;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie(JWT_COOKIE_KEY, token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // in ms
    httpOnly: true, // Prevents XSS attacks: cross-site scripting
    sameSite: "strict", //CSRF attacks
    secure: NODE_ENV === DEVELOPMENT ? false : true, // determine https or http
  });

  return token;
};
