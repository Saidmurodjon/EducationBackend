const mongoose = require('mongoose')
const EduGroupSchema = mongoose.Schema({
    subject: String,
    name: String,
    price: String,
    time: String,
    pupils:
        [
            {
                name: String,
                tel: String,
                adress: String,
                parents: String,
                tolov:
                    [
                        {
                            month: String,
                            price: String,
                        }
                    ]


            }]

})

const EduGroupModel = mongoose.model('EduGroupModel', EduGroupSchema)
module.exports = EduGroupModel