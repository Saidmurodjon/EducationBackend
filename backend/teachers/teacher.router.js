const express=require('express')
const router =express.Router()
const uploadMulter =require('./upload')
const teacherController=require('./teacher.controller')
router.route('/').get(teacherController.getTeacher)
router.route('/',uploadMulter).post(teacherController.addTeacher)
router.route('/:id').put(teacherController.updateTeacher)
router.route('/:id').delete(teacherController.deleteTeacher)


module.exports=router