const express=require('express')
const app=express()
const fs=require('fs')
require('dotenv').config()
const{connectDb}=require('./config/db')
let PORT=process.env.PORT
const cntRoute=require('./router/cntRouter')
const{engine}=require('express-handlebars')
connectDb();

// !to use for front end
app.engine('handlebars',engine())
app.set('view engine','handlebars')
// ============================================
// ============================================
// TODO Styleing
app.get('/style',(req,res)=>{
   fs.createReadStream('public/style.css').pipe(res)
})
// ============================================

// !using for Postman APP
// app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',cntRoute)
//=============================================


app.get('/',(req,res)=>{
    res.render('home',{title:'Home Page'})
})

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log("server is running on port 5000");
})