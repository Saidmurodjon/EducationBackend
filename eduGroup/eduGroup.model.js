const mongoose = require('mongoose')
const eduGroupSchema = mongoose.Schema({
    name: String,
    subject: String,
    time: String,
    price: String,
    teacherName: String,
    date: String
})

const eduGroupModel = mongoose.model('eduGroupModel', eduGroupSchema)
module.exports = eduGroupModel