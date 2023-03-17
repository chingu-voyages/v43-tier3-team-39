const mongoose = require('mongoose')
const KEY = process.env.ATLAS_PW

mongoose.connect(`mongodb+srv://Andrewgl:${KEY}@cluster0.4qha5k5.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
})
.then(()=>console.log("Successfully connected to MongoDB"))
.catch((err)=>console.log(err))