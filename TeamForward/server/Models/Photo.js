const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    imageURL:{
        type:String
    },
    profile: {
        type: Boolean
    },
      // Do we need this to establish relationship between user and photo?
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId, 
    //   ref: "User",
    //   require: true,
    // },
});

const Photo = mongoose.model('photo',PhotoSchema);
module.exports = Photo;


