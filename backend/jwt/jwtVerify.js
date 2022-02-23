const jwt=require('jsonwebtoken')
const config=require('./config')
module.exports=(req,res,next)=>{
    let token=req.headers['jwt-token']

     jwt.verify(token, config.secretKey,(err, a)=>{
         if(err){
             return res.status(400).send('token eskirgan')
         }
         return next()
     })
}