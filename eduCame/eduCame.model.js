const mongoose = require('mongoose')
const eduCameSchema = mongoose.Schema({
    date: String,
    pupilId: String,
    came: {
        type:Boolean,
        default:true
    },
    back:{
        type:Boolean,
        default:false
    },
    name: String,
    subject: String,
    imgPath: String


})

const eduCameModel = mongoose.model('eduCameModel', eduCameSchema)
module.exports = eduCameModel
