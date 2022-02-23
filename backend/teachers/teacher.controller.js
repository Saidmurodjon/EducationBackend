const TeacherModel=require('./teacher.model')
// const fs = require('fs');
// const gutil = require('gulp-util');
// const fs = require('fs');

async function getTeacher(req,res) {
    try{
        const teacher=await TeacherModel.find({})
        return res.status(200).send(teacher)
    }catch(err){
        res.status(400).send(err)
    }
}


async function addTeacher(req,res) {
    try{
        // const teacher=await TeacherModel.create(req.body)
        // return res.status(200).send(teacher)
       
        let image =Date.now()+req.file.originalname
        console.log(image)
        const category = new TeacherModel({
            
            name:req.body.name,
            tel:req.body.tel,
            address:req.body.address,
            subject:req.body.subject,
            birth:req.body.birth,
            login:req.body.login,
            password: req.body.password,
            imagePath: image
        })
        category.save((err, category) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    errors: err.meesage
                })
            }
            return res.json({
                message: "Created category successfully",
                category
            })
        })
    }catch(err){
        res.status(400).send(err)
    }
}


async function updateTeacher(req,res) {
    try{
        let image =Date.now()+req.file.originalname
        console.log(image)
        const category = new TeacherModel({
            
            name:req.body.name,
            tel:req.body.tel,
            address:req.body.address,
            subject:req.body.subject,
            birth:req.body.birth,
            login:req.body.login,
            password: req.body.password,
            imagePath: image
        })
        category.save((err, category) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    errors: err.meesage
                })
            }
            return res.json({
                message: "Update teacher successfully",
                category
            })
        })
        
        // let userId=req.params.id
        // let result=await TeacherModel.findByIdAndUpdate(userId,req.body)
        // return res.status(200).send(result)
    }catch(err){
        res.status(400).send(err)
    }
}


async function deleteTeacher(req,res) {
    try{
        
       
        let userId=req.params.id
  
        let result=await TeacherModel.findByIdAndDelete(userId)
        return res.status(200).send(result)
        
    }catch(err){
        res.status(400).send(err)
    }
}
module.exports={
    getTeacher,
    addTeacher,
    updateTeacher,
    deleteTeacher
}