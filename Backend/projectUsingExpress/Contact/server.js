const express=require('express')
const fs=require('fs')

const app=express() 
require('dotenv').config()
const {connectionDb}=require('./config/db')
const {engine}=require('express-handlebars')
const PORT=process.env.PORT;
const CntRouting=require('./Routing/cntrouter')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

connectionDb()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api',CntRouting)

app.get('/style',(req,res)=>{
  fs.readFile('./styleing/home.css',(err,data)=>{
    if(err) throw err
    res.end(data)
  })
})
app.get('/',(req,res)=>{
  res.render('home',{title:"home page"})
})
app.get('/home',(req,res)=>{
  res.render('home',{title:"home page"})
})
app.get('/allcontacts',(req,res)=>{
  res.render('contacts/viewContact',{title:"ViewContact"})
})
app.get('/addcontacts',(req,res)=>{
  res.render('contacts/addContact',{title:"addContact"})
})

// Catch-all invalid Routes
// app.get('*',(req,res)=>{
//   res.send("Sorry,this is an invalid Url")
// })


app.listen(PORT,(err)=>{
  if(err) throw err;
  console.log(`server is running on port ${PORT}`)
})