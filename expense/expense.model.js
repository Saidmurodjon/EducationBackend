const mongoose = require('mongoose')
const expenseSchema = mongoose.Schema({
    name:String,
    date:String,
    value:String,

})
const ExpenseModel = mongoose.model('ExpenseModel', expenseSchema)
module.exports = ExpenseModel