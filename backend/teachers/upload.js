const multer =require('multer')
const path =require('path')

const stroage = multer.diskStorage({
    destination: (req,file, calback) => {
        calback(null,"./assets")
    },
    filename:(req,file,calback)=>{
        console.log(file);
        calback(null,file.originalname);
    }
})  

let upload=multer({
    storage:stroage,  
    // fileFilter:filerFilter
})
module.exports=upload.single("imagePath")