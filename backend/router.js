const express=require('express')
const router=express.Router()
const teacherRouter=require('./teachers/teacher.router')
const adminRouter=require('./admin/admin.router')
const auth=require('./jwt/auth')
const EduGroupRouter = require('./EduGroup/EduGroup.router')
const jwtVerify=require('./jwt/jwtVerify')

router.use('/login',auth)
router.use(jwtVerify)
router.use('/teachers',teacherRouter)
router.use('/addAdmin',adminRouter)

router.use('/EduGroup', EduGroupRouter)

module.exports=router