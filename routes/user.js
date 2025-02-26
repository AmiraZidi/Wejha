const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const isAuth = require("../middleware/passport");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");

//register
userRouter.post("/register", registerRules(), validation, async (req, res) => {
  const { name, last_name, email, password, category, profile_photo } =
    req.body;
  try {
    let newuser = new User(req.body);
    //checking the e-mail
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "user already exist" });
    }
    // hash password before saving the user
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newuser.password = hashedPassword;
    //generate a token
    const payload = {
      _id: newuser._id,
      name: newuser.name,
    };
    const token = await jwt.sign(payload, process.env.SK, {
      expiresIn: 86400,
    });
    //save user
    let result = await newuser.save();
    res.send({ user: result, msg: "user is added", token });
  } catch (error) {
    console.log(error);
  }
});

//login
userRouter.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //checking if the user exist
    const searchedUser = await User.findOne({ email });
    // checking if the email doesnt exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "Bad Credential" });
    }
    // checking if the passwords are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "Bad Credential" });
    }
    // create a token = session
    const payload = {
      _id: searchedUser._id,
    };
    const token = await jwt.sign(payload, process.env.SK, {
      expiresIn: 86400,
    });
    console.log(token);
    //save user
    res.send({ user: searchedUser, msg: "Success", token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
  }
});

//get current user
userRouter.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

// get all users

userRouter.get("/get", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ Users: result, msg: "all Users" });
  } catch (error) {
    console.log(error);
  }
});

// update profil

userRouter.put("/:id", async (req, res) => {
  try {
    const { password, ...otherUpdates } = req.body;

    // Hash password if it's provided
    if (password) {
      const salt = await bcrypt.genSalt(10);
      otherUpdates.password = await bcrypt.hash(password, salt);
    }

    let result = await User.findByIdAndUpdate(
      req.params.id,
      { $set: otherUpdates },
      { new: true }
    );

    if (!result) {
      return res.status(404).send({ msg: "User not found" });
    }

    res.send({ msg: "User is updated", user: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = userRouter;
