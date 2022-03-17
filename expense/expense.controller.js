const ExpenseModel = require('./expense.model')


async function getExpense(req,res) {
    try{
        const expense=await ExpenseModel.find({})
        return res.status(200).send(expense)
    }catch(err){
        res.status(400).send(err)
    }
}


async function addExpense(req,res) {
    try{
       
     
        const category = new ExpenseModel({
            
            name:req.body.name,
            date:req.body.date,
            value:req.body.value,
       
        })
        category.save((err, category) => {
            if (err) {
                // console.log(err)
                return res.status(400).json({
                    errors: err.meesage
                })
            }
            return res.json({
                message: "Created expense successfully",
                category
            })
        })
    }catch(err){
        res.status(400).send(err)
    }
}




module.exports={
    getExpense,
   addExpense
}