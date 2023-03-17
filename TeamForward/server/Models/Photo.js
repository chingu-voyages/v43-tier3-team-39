const mongoose = require('mongoose');

const PhotoSchema = new Schema({
    imageURL:{
        type:String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "UserSchema",
        required: true
    },
    profile:Boolean
});

const Photo = new mongoose.model('photo',PhotoSchema);

module.exports = Photo;

