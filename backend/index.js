const express=require('express')
const app=express()
const mongoose =require('mongoose')
// const appRouter=require('./router')


app.use(express.json())

// O'zgartirilmasin bu online baza. local emas foydalanish uchun internetga ulanishiz talab qilinadi !!!
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
    
    
// app.use('/',appRouter)


app.listen(5000, ()=>{
    console.log("5000 port working");
})