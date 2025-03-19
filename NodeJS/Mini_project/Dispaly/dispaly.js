const fs=require('node:fs')
const http=require('http')
const creatServer=http.createServer((req,res)=>{
  fs.writeFile("text.txt","Rajendra",(err)=>{
    if(err) throw err

  })
  fs.readFile("text.txt",'utf-8',(err,data)=>{
    res.end(`<h1>${data}</h1>`)
  })
  fs.cre
})
creatServer.listen(3000,(err)=>{
  if(err) throw err;
  console.log("Server runing on 3000 port")

})
