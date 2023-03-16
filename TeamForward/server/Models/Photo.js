const mongoose = reuqire('mongoose')

const PhotoSchema = new Schema({
    imageURL:{
        type:String
    },
    profile:Boolean
})

const Photo = new mongoose.model('photo',PhotoSchema)

module.exports = Photo

