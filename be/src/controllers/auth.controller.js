import { sendWelcomeEmail } from "../emails/emailHandler.js";
import { ENV } from "../lib/env.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All the fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    // check if email is : regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    // Add password hashing to encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      const savedUser = await newUser.save();
      generateToken(savedUser._id, res);

      const { _id, fullName, email, profilePic } = newUser;

      res.status(201).json({
        _id,
        fullName,
        email,
        profilePic,
      });

      // To-Do Send a welcome email to the user
      try {
        await sendWelcomeEmail(email, fullName, ENV.CLCIENT_URL);
      } catch (error) {
        console.log("Faile to send welcome email: ", error);
      }
      return;
    }
    return res.status(400).json({ message: "Invalid user data" });
  } catch (error) {
    console.log("Error in signup controller: ", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Internal server error" });
  }
};
