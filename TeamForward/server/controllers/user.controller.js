const User = require("../Models/User");
const log = require("../helpers/logging");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const locationHelpers = require("../helpers/locationHelpers");
const cloudinary = require("../Config/cloudinary");

module.exports = {
  createNewUser: (req, res) => {
    User.create(req.body)
      .then((newUser) => {
        const payload = { id: newUser._id };
        const userToken = jwt.sign(payload, process.env.SecretKeyOne);
        res.cookie("jwt-token", userToken, { httpOnly: true, secure: true, sameSite: "none" }).json(newUser);
      })
      .catch((err) => {
        log("Something went wrong with createNewUser");
        res.status(400).json(err);
      });
  },

  loggedInUser: (req, res) => {
    log("userId", req.userId)
    User.findOne({ _id: req.userId }, { password: 0 })
      .then((loggedUser) => {
        log(loggedUser);
        res.json(loggedUser);
      })
      .catch((err) => {
        log("Find logged In user failed");
      });
  },

  login: async (req, res) => {
    log(req.body.email, req.body.password);
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Something went wrong with login");
    }
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.status(400).send("Incorrect Email");
    }


    const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if ( !correctPassword) {
            return res.status(400).send("Incorrect Password");
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
        secure: true,
        sameSite: "none"
      })
      .json({ msg: "success!", user: user });
  },

  findOneUser: (req, res) => {
    let findId;
    try {
      findId = new mongoose.Types.ObjectID(req.params.id);
    } catch (err) {
      res.status(404).json("This user could not be found");
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

  findAllUsers: async(req, res) => {
    const userInfo = await User.findOne({ _id: req.userId }, { password: 0 });
    const interests = req.query['interests'];
    const activities = req.query['activities'];
    const results = await locationHelpers.getUsersWithinRadius(userInfo.location.coordinates, userInfo.radius, interests, activities, req.userId);
    res.json(results);
  },
  
  updateUser: async (req, res) => {
    let body = { ...req.body };

    log("FIRST LOG HERE REQ.BODY:",body, "FIRST LOG REQ.PARAMS",req.params);
    if (body.photo) {
      //if there's an existing cloudinaryProfileImgUrl/cloudinaryId, then delete it from cloudinary
      let userPhoto = await User.findById({_id: req.params.id });

      try {
        await cloudinary.uploader.destroy(userPhoto.cloudinaryId);
      } catch (exception) {
        console.log("Something went wrong with updateUser", exception);
      }

      let result;
      try {
        result = await cloudinary.uploader.upload(body.photo);
        const { secure_url, public_id } = result;

        body.cloudinaryProfileImgUrl = secure_url;
        body.cloudinaryId = public_id;

        delete body.photo;
      } catch (exception) {
        res.status(400).json(exception);
        log("Something went wrong with cloudinary upload");
      }
    }

    
    if(body.zipCode){
      const address = body.zipCode;
      const locationData = await locationHelpers.getLocationHelper(address);

      let location;
      if(locationData?.length > 0){
        location = locationData[0];
      }

      const coordinates = [location.longitude, location.latitude];

      body = {
        ...body, 
        location: {
            type:'Point',
            coordinates
        },
        // location2: {
        //   type:'Point',
        //   coordinates
        // }
      };
    }

    if( !body.zipCode ){
      body.location = {undefined};
    }

    User.findOneAndUpdate(
      { _id: req.params.id }, 
      {$set: body},
      {new: true}
    )
      .then((updatedUser) => {
        log("updatedUser:" ,updatedUser);
        res.json(updatedUser);
      })
      .catch((err) => {
        res.status(400).json(err);
        console.log("Something went wrong with updatedUser");
      });

  },

  logOut: (req, res) => {
    res.clearCookie("jwt-token", {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });
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
