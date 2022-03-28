const twilio = require('twilio');
const PupilsModel=require('./../pupils/puplis.model')
const data=new Date()
async function sendSms(req,res) {
    try{
        let userId=req.params.id
        let user= await PupilsModel.findOne({_id:userId})
        let cost=req.body.cost

        var twl=twilio('AC47906b40a9d4456c8deb66a5cef10fc4','decc5189cec7694503c3be5e025495a8')
        twl.messages.create({
            to:user.parentsPhoneNumber,
            from:"+13345532376",
            body:`Farzandingiz ${user.name} ${user.subject} fani uchun ${data.getDate()}
            sanada ${cost} so'm to'lov qildi`
        })
        // console.log(req);
        return res.status(200).send(user.paymet)
    }catch(err){
        res.status(400).send(err)
        // console.log(err);
    }
}




module.exports={
    sendSms
}