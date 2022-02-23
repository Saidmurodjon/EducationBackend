const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
    
    login:String,
    password: String,
    
    role:{
        type:String,
        default:"user"
    }
    
})
const AdminModel = mongoose.model('AdminModel', adminSchema)
module.exports = AdminModel