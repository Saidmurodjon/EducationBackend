const express=require('express')
const router =express.Router()
const uploadMulter =require('./../teachers/upload')

const pupilsController=require('./pupils.controller')
router.route('/').get(pupilsController.getPupils)
router.route('/').post(uploadMulter,pupilsController.addPupils)
router.route('/:id').put(uploadMulter,pupilsController.updatePupils)
router.route('/:id').delete(pupilsController.deletePupils)
router.route('/pay/:id').put(pupilsController.payPupils)



module.exports=router