const express=require('express')
const router =express.Router()
const adminController=require('./admin.controller')
router.route('/').get(adminController.getAdmin)
router.route('/').post(adminController.addAdmin)
router.route('/:id').put(adminController.updateAdmin)
router.route('/:id').delete(adminController.deleteAdmin)


module.exports=router