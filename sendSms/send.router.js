const express=require('express')
const router =express.Router()
const send=require('./send')
router.route('/:id').put(send.sendSms)
router.route("/visitation/:id").put(send.Visitation);



module.exports=router