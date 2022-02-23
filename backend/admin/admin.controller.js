const AdminModel=require('./admin.model')


async function getAdmin(req,res) {
    try{
        const admin=await AdminModel.find({})
        return res.status(200).send(admin)
    }catch(err){
        res.status(400).send(err)
    }
}


async function addAdmin(req,res) {
    try{
        const admin=await AdminModel.create(req.body)
        return res.status(200).send(admin)
       
        // let image =Date.now()+req.file.originalname
        // console.log(image)
        // const category = new AdminModel({
            
        //     name:req.body.name,
        //     tel:req.body.tel,
        //     address:req.body.address,
        //     subject:req.body.subject,
        //     birth:req.body.birth,
        //     login:req.body.login,
        //     password: req.body.password,
        //     imagePath: image
        // })
        // category.save((err, category) => {
        //     if (err) {
        //         console.log(err)
        //         return res.status(400).json({
        //             errors: err.meesage
        //         })
        //     }
        //     return res.json({
        //         message: "Created category successfully",
        //         category
        //     })
        // })
    }catch(err){
        res.status(400).send(err)
    }
}


async function updateAdmin(req,res) {
    try{
        
        let userId=req.params.id
        let result=await AdminModel.findByIdAndUpdate(userId,req.body)
        return res.status(200).send(result)
    }catch(err){
        res.status(400).send(err)
    }
}


async function deleteAdmin(req,res) {
    try{
        let userId=req.params.id
        let result=await AdminModel.findByIdAndDelete(userId)
        return res.status(200).send(result)
    }catch(err){
        res.status(400).send(err)
    }
}
module.exports={
    getAdmin,
    addAdmin,
    updateAdmin,
    deleteAdmin
}