const express=require('express')
const router=express.Router()
const teacherRouter=require('./teachers/teacher.router')
const adminRouter=require('./admin/admin.router')
const auth=require('./jwt/auth')
// const jwtVerify=require('./jwt/jwtVerify')
const pupilsRouter=require('./pupils/pupils.router')

router.use('/login',auth)
// router.use(jwtVerify)
router.use('/teachers',teacherRouter)
router.use('/addAdmin',adminRouter)
router.use('/pupils',pupilsRouter)

module.exports=router