const express=require('express')
const router =express.Router()
const send=require('./send')
// router.route('/').get(send.sendSms)
router.route('/:id').put(send.sendSms)



module.exports=router