const express=require('express')
const router =express.Router()
// const uploadMulter =require('./upload')
const uploadMulter=require('./upload')
const teacherController=require('./teacher.controller')
router.route('/').get(teacherController.getTeacher)
router.route('/').post(uploadMulter,teacherController.addTeacher)
router.route('/:id').put(uploadMulter,teacherController.updateTeacher)
router.route('/:id').delete(teacherController.deleteTeacher)


module.exports=router