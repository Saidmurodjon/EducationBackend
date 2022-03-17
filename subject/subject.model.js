const mongoose = require('mongoose')
const subjectSchema = mongoose.Schema({
    name: String,
    date: String
})

const subjectModel = mongoose.model('subjectModel', subjectSchema)
module.exports = subjectModel