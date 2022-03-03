const PupilsModel=require('./puplis.model')
// var QRCode      =   require('qrcode');
const fs = require('fs');
const path = require('path');
const upload = require('../teachers/upload');
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
        let image =req.file.originalname
        

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
        let del= await PupilsModel.findOne({userId})
        
        // console.log(del.imagePath);

        fs.unlink( `/home/kali/theBest/EducationMERN/backend/uploads/${del.imagePath}`, function (err) {            
            if (err) {                                                 
                console.error(err);                                    
            }                                                          
           console.log('File has been Deleted');                           
        }); 
        let image =req.file.originalname
        let category = ({
            
            name:req.body.name,
            tel:req.body.tel,
            address:req.body.address,
            parentsPhoneNumber:req.body.parentsPhoneNumber,
            birth:req.body.birth,
            paymet:req.body.paymet,
            group: req.body.group,
            imagePath: image,
            // qrcode:req.body.qrcode
        })
        let result=await PupilsModel.findByIdAndUpdate(userId,category)
      
        return res.status(200).send(result)
    }catch(err){
        res.status(404).send(err)
    }
}

async function deletePupils(req,res) {
    try{
        
       
        let userId=req.params.id
        let del= await PupilsModel.findOne({userId})
        
        console.log(del.imagePath);

        fs.unlink( `/home/kali/theBest/EducationMERN/backend/uploads/${del.imagePath}`, function (err) {            
            if (err) {                                                 
                console.error(err);                                    
            }                                                          
           console.log('File has been Deleted');                           
        }); 

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