const express = require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send('hello world')
})
app.listen(3000,(err)=>{
  if(err){
    throw err;
  }
  console.log('server is runing on port 3000')
})