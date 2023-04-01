const User = require("../Models/User");
const log = require("../helpers/logging");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  createNewUser: (req, res) => {
    User.create(req.body)
      .then((newUser) => {
        const payload = { id: newUser._id };
        const userToken = jwt.sign(payload, process.env.SecretKeyOne);
        res.cookie("jwt-token", userToken, { httpOnly: true }).json(newUser);
      })
      .catch((err) => {
        log("something went wrong with createNewUser");
        res.status(400).json(err);
      });
  },

  loggedInUser: (req, res) => {
    User.findOne({ _id: req.userId }, { password: 0 })
      .then((loggedUser) => {
        log(loggedUser);
        res.json(loggedUser);
      })
      .catch((err) => {
        log("find logged In user failed");
      });
  },

  login: async (req, res) => {
    log(req.body.email, req.body.password);
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("something went wrong with login");
    }
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.status(400).send("incorrect email");
    }
    const correctPassword = await (req.body.password === user.password);
    if (!correctPassword) {
      return res.status(400).send("incorrect password");
    }
    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SecretKeyOne
    );
    res
      .cookie("jwt-token", userToken, {
        httpOnly: true,
      })
      .json({ msg: "success!", user: user });
  },

  findOneUser: (req, res) => {
    let findId;
    try {
      findId = new mongoose.Types.ObjectID(req.params.id);
    } catch (err) {
      res.status(404).json("this user could not be found");
      return;
    }
    User.findOne({ _id: findId })
      .then((oneUser) => {
        log(oneUser);
        if (oneUser === null) {
          res.status(404).json("This user could not be found");
        } else {
          res.json(oneUser);
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong in findOneUser",
          error: err,
        });
        log("findOneUser failed");
      });
  },

  findAllUsers: (req, res) => {
    User.find({})
      .then((allUsers) => {
        log(allUsers);
        res.json(allUsers);
      })
      .catch((err) => {
        log("findallUsers failed");
        res.json({
          message: "Something went wrong with findAllUsers",
          error: err,
        });
      });
  },
  updateUser: (req, res) => {
    console.log(req.body, "req.body in server");
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((updatedUser) => {
        log(updatedUser);
        res.json(updatedUser);
      })
      .catch((err) => {
        res.status(400).json(err);
        log("Something went wrong with updatedUser");
      });
  },

  logOut: (req, res) => {
    res.clearCookie("jwt-token");
    res.sendStatus(200);
  },

  deleteUser: (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then((deletedUser) => {
        log(deletedUser);
        res.json(deleteUser);
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong with deleteUser",
          error: err,
        });
        log("deleteUser failed");
      });
  },
};
