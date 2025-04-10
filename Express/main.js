const express=require('express')
const app=express()


app.set("view engine","ejs")
app.use(express.static('./public'))
app.get('/',(req,res)=>{
res.render('index',{age:12})
});
app.get('/about',(req,res)=>{
res.render('about',{age:12})
});
app.get('/contact',(req,res)=>{
res.render('contact',{age:12})
});
app.get('/faqs',(req,res)=>{
res.render('faqs',{age:12})
});


app.listen(3000,(err)=>{
  console.log(err)
  console.log("Server runing on 3000 port")
});