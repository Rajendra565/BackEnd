const express=require('express')
const app=express()


app.set("view engine","ejs")
app.get('/',(req,res)=>{
res.render('index',{age:12})
});
// app.get('/profile/:username',(req,res)=>{
//   // console.log()
//   res.send(`${req.params.username}`)
 
// })
app.listen(3000,(err)=>{
  console.log(err)
  console.log("Server runing on 3000 port")
});