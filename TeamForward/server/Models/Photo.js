const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    imageURL:{
        type:String
    },
    profile: {
        type: Boolean
    }
});

const Photo = mongoose.model('photo',PhotoSchema);
module.exports = Photo;

