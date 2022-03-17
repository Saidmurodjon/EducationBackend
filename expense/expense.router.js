const express=require('express')
const router =express.Router()
const expenseController=require('./expense.controller')

router.route('/').get(expenseController.getExpense)
router.route('/').post(expenseController.addExpense)

module.exports=router