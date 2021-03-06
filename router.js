const express=require('express')
const router=express.Router()
const path=require('path')
// barcha so'rovlar githubda yozilgan !!!
const teacherRouter=require('./teachers/teacher.router')
const adminRouter=require('./admin/admin.router')
const auth=require('./jwt/auth')
// const jwtVerify=require('./jwt/jwtVerify')
const pupilsRouter=require('./pupils/pupils.router')
const expenseRouter=require('./expense/expense.router')
const sendSmsRouter=require('./sendSms/send.router')
// Asror aka tayyorladi
const eduGroupRouter = require('./eduGroup/eduGroup.router')
const eduCameRouter = require('./eduCame/eduCame.router')
const subjectRouter=require('./subject/subject.router')
router.use('/login',auth)
// router.use(jwtVerify)
router.use('/teachers',teacherRouter)
router.use('/addAdmin',adminRouter)
router.use('/pupils',pupilsRouter)
router.use('/uploads',express.static((__dirname,"uploads")))
router.use('/expense',expenseRouter)
router.use('/send',sendSmsRouter)
// Asror aka tayyorladi
router.use('/eduGroup', eduGroupRouter)
router.use('/eduCame', eduCameRouter)
router.use('/subject',subjectRouter)

module.exports=router