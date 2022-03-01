const PupilsModel=require('./puplis.model')
// const fs = require('fs');
// const gutil = require('gulp-util');
// const fs = require('fs');

async function getPupils(req,res) {
    try{
        const pupils=await PupilsModel.find({})
        return res.status(200).send(pupils)
    }catch(err){
        res.status(400).send(err)
    }
}


async function addPupils(req,res) {
    try{
        // const teacher=await TeacherModel.create(req.body)
        // return res.status(200).send(teacher)
       
        let image =Date.now()+req.file.originalname
        console.log(image)
        const category = new PupilsModel({
            
            name:req.body.name,
            tel:req.body.tel,
            address:req.body.address,
            parentsPhoneNumber:req.body.parentsPhoneNumber,
            birth:req.body.birth,
            paymet:req.body.paymet,
            group: req.body.group,
            imagePath: image,
            qrcode:req.body.qrcode
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

async function updatePupils(req,res) {
    try{
        let userId=req.params.id
        let image =Date.now()+req.file.originalname
        let category = ({
            
            name:req.body.name,
            tel:req.body.tel,
            address:req.body.address,
            parentsPhoneNumber:req.body.parentsPhoneNumber,
            birth:req.body.birth,
            paymet:req.body.paymet,
            group: req.body.group,
            imagePath: image,
            qrcode:req.body.qrcode
        })
        // console.log(category);
        let result=await PupilsModel.findByIdAndUpdate(userId,category)
      
        return res.status(200).send(result)
    }catch(err){
        res.status(404).send(err)
    }
}

async function deletePupils(req,res) {
    try{
        
       
        let userId=req.params.id
        // let del= await TeacherModel.findOne({userId})
        let result=await PupilsModel.findByIdAndDelete(userId)
        // console.log(del.imagePath); 
        // fs.unlinkSync();
      

        return res.status(200).send(result)
    }catch(err){
        res.status(400).send(err)
    }
}
module.exports={
    getPupils,
    addPupils,
    updatePupils,
    deletePupils
}