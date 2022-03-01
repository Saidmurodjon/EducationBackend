const express=require('express')
const router=express.Router()
const teacherRouter=require('./teachers/teacher.router')
const adminRouter=require('./admin/admin.router')
const auth=require('./jwt/auth')
// const EduGroupRouter = require('./EduGroup/EduGroup.router')
const jwtVerify=require('./jwt/jwtVerify')
const pupilsRouter=require('./pupils/pupils.router')

router.use('/login',auth)
router.use('/teachers',teacherRouter)
router.use('/addAdmin',adminRouter)
router.use('/pupils',pupilsRouter)
router.use(jwtVerify)
// router.use('/EduGroup', EduGroupRouter)

module.exports=router