const User = require("../Models/User");
const log = require("../helpers/logging");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cloudinary = require("../Config/cloudinary");

module.exports = {
  createNewUser: (req, res) => {
    User.create(req.body)
      .then((newUser) => {
        const payload = { id: newUser._id };
        const userToken = jwt.sign(payload, process.env.SecretKeyOne);
        log(newUser);
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
        if: user._id,
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
    if (req.body.photo) {
      // TODO: when we hook the front end, this may be called something else like req.file.path
      // TODO: if there's an existing cloudinaryProfileImgUrl/cloudinaryId, then delete it from cloudinary LINK: https://cloudinary.com/documentation/image_upload_api_reference#destroy_method
      let userPhoto = User.findById({_id: req.params.id });
      cloudinary.uploader
        .destroy(userPhoto.cloudinaryId)
        .then((response) => console.log(response));
        console.log("destroy works" , userPhoto)
      cloudinary.uploader
        .upload(req.body.photo)
        .then((result) => {
          const { secure_url, public_id } = result;

          req.body.cloudinaryProfileImgUrl = secure_url;
          req.body.cloudinaryId = public_id;

          delete req.body.photo;

          const updateDoc = {
            $set: req.body,
          };
          console.log("req.body: ", req.body);
          User.updateOne({ _id: req.params.id }, updateDoc)
            .then((updatedUser) => {
              log(updatedUser);
              res.json(updatedUser);
            })
            .catch((err) => {
              // res.status(400).json(err);
              log("Something went wrong with updatedUser");
            });
        })
        .catch((err) => {
          // res.status(400).json(err);
          log("Something went wrong with cloudinary upload");
        });
    } else {
      User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((updatedUser) => {
          log(updatedUser);
          res.json(updatedUser);
        })
        .catch((err) => {
          // res.status(400).json(err);
          log("Something went wrong with updatedUser");
        });
    }
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

//Hard code testing for cloudinary

// const data = {
//   params: { id: "642078f06123442ebb457632" }, //if this does not work, then find a way to convert to object id
//   body: {
//     photo:
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=",
//     firstName: "Aya",
//   },
// };
// module.exports.updateUser(data);

// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABEgAAACjCAYAAACZtyuEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARDSURBVHgB7dgBDcAwDMCw/Tqi8ufWj0dsKSTyzMweAAAAgK59DwAAAECcQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQJ5BAgAAAOQZJAAAAECeQQIAAADkGSQAAABAnkECAAAA5BkkAAAAQN532wMAAADQtT/zaAXag6h60wAAAABJRU5ErkJggg=="
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=",
