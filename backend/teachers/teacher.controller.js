const TeacherModel=require('./teacher.model')
// const multer =require('multer')

// const stroage = multer.diskStorage({
//     destination: (req,file, calback) => {
//         calback(null,"./assets")
//     },
//     filename:(req,file,calback)=>{
//         calback(null,file.originalname);
//     }
// })
// const upload =multer({storage:stroage})

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
        const teacher=await TeacherModel.create(req.body  )
        return res.status(200).send(teacher)
    }catch(err){
        res.status(400).send(err)
    }
}


async function updateTeacher(req,res) {
    try{
        let userId=req.params.id
        let result=await TeacherModel.findByIdAndUpdate(userId,req.body)
        return res.status(200).send(result)
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