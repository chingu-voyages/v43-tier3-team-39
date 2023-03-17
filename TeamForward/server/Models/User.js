const mongoose = require("mongoose");
const Photo = require("./Photo");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  DOB: {
    type: Date,
    // check that dob is greater than 18 years ago
    required: [false, "Must be 18 or older to sign up"],
  },
  bio: {
    type: String,
  },
  // add photo model to save profile photo info
  photos: {
    type: [Photo.schema],
  },
  profession: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  // how to convert miles to km
  radius: {
    type: Number,
    // min max radius distance
  },
  interests: {
    type: [String],
  },
  activites: {
    type: [String],
  },
  dmPrivacy: Boolean,
  // userID in each message for ref
  notifications: {
    type: Number,
  },
  googleAuthId: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
