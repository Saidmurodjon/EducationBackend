const express=require('express')
const app=express()
const mongoose =require('mongoose')
const appRouter=require('./router')
const cors =require('cors')
const bcrypt=require('bcrypt')
const  path  = require('path')
const port=process.env.PORT ||5000

app.use(express.json())
app.use(cors())
// async function Tuz() {
//     let tuz=await bcrypt.genSalt()
//     console.log(tuz);
// }
// Tuz()

const url = `mongodb+srv://theBest:1020@cluster0.m79kn.mongodb.net/EducationMERN`;

const connectionParams={
    useNewUrlParser: true,
    
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    
    
app.use('/',appRouter)


app.listen(port, ()=>{
    console.log("5000 port working");
})