const express=require('express');
const app=express();
require('dotenv').config()


const PORT=process.env.PORT;





app.get('/',(req,res)=>{
  res.send("leading page")
})
app.get('/about',(req,res)=>{
  res.send("about page")
})
app.get('/home',(req,res)=>{
  res.send("Home page")
})











app.listen(PORT,()=>{
  
  console.log(`server runing on ${PORT}`)
})