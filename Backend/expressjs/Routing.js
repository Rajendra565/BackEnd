// ! Middlewares:
// ? three ways to use middlewares in express
const express = require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello World")
})
//TODO: this is a middleware callback function
// app.use((req,res,next)=>{
//   console.log("middleware 1")
//   next()
// })
// Todo: this is a Middleware function 
// const middleware2=(req,res,next)=>{
//     console.log("middleware 2")
//     next()
// }
// app.use(middleware2)

// Todo:this is a middleware function in routing

app.get("/about",(req,res,next)=>{
  console.log("Middleware 3")
  next()
},(req,res)=>{
    res.send("About Page")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
