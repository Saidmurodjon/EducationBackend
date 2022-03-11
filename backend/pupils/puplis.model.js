const mongoose = require('mongoose')
const pupilsSchema = mongoose.Schema({
    name:String,
    tel:String,
    address:String,
    parentsPhoneNumber:String,
    birth:String,
    group:String,
    paymet: [{
        month:String,
        cost:String
    }],
    subject:String,
    imagePath: {
        type: String,
        trim: true,
        required: true
    }
    // role:{
    //     type:String,
    //     default:"user"
    // }
    
})
const PupilsModel = mongoose.model('PupilsModel', pupilsSchema)
module.exports = PupilsModel