import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Parent from "../models/parent.model.js";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateTokens.js";

export const signup = asyncHandler(async (req, res) => {
  try {
    const { name, email, gender, dob, password, parentEmail } = req.body;
    if (!name || !email || !gender || !dob || !password || !parentEmail) {
      res.status(400);
      throw new Error("Please enter all the Fields");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("Username already exists");
    }

    //Hash Password here using bcryptjs
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating new User
    const newUser = new User({
      name,
      email,
      gender,
      dob,
      password: hashedPassword,
      parentEmail,
    });

    if (newUser) {
      //Generating JWT Token here
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        gender: newUser.gender,
        dob: newUser.dob,
        parentEmail: newUser.parentEmail,
      });
    } else {
      res.Status(400);
      throw Error("Invalid user data");
    }
  } catch (error) {
    console.log("Error in Signup Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401);
      throw Error("Invalid Username");
    }
    const isPasswordCorect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorect) {
      res.status(401);
      throw Error("Wrong Password!");
    }

    //JWT token generation and setting cookie
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
    });
  } catch (error) {
    console.log("Error in Login Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.log("Error in Logout Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signupParent = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please enter all the Fields");
    }

    const userExists = await User.findOne({ parentEmail: email });
    if (!userExists) {
      res.status(400);
      throw new Error("Please enter the email provided in student login");
    }

    //Hash Password here using bcryptjs
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating new User
    const newUser = new Parent({
      name,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      //Generating JWT Token here
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } else {
      res.Status(400);
      throw Error("Invalid user data");
    }
  } catch (error) {
    console.log("Error in Signup Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const loginParent = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Parent.findOne({ email });
    if (!user) {
      res.status(401);
      throw Error("Invalid email entered");
    }
    const isPasswordCorect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorect) {
      res.status(401);
      throw Error("Wrong Password!");
    }

    //JWT token generation and setting cookie
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in Login Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
