const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema({
    name:String,
    tel:String,
    address:String,
    subject:String,
    birth:String,
    login:String,
    password: String,
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
const TeacherModel = mongoose.model('TeacherModel', teacherSchema)
module.exports = TeacherModel