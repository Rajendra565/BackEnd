const express=require('express')
const app=express()
const fs=require('fs')
const mongoose=require('mongoose')
app.use(express.urlencoded({extended:true}))
let collection;
(async()=>{
  let database=await mongoose.connect('mongodb://localhost:27017/userInfo')
  collection=database.connection.collection('userInfo')
  console.log("database connected")
})()
app.get('/',(req,res)=>{
  res.send("home page of Express")
})
app.get('/from',(req,res)=>{
  fs.createReadStream('./index.html').pipe(res)
})
app.post('/from',async(req,res)=>{
  await collection.insertOne(req.body)
  res.send('data submitted successfully')
})
app.listen(5000,(err)=>{
  if(err) throw err;
  console.log("server runing on 5000 port")
})