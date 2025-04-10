const Http=require('http')
const PORT=4000
const CreateServer=Http.createServer((req,res)=>{
  res.write("<h1>Rajendra</h1>")
  res.end()
})
CreateServer.listen(PORT,(err)=>{
  if(err) throw err;
  console.log(`Server runing on ${PORT}`)
})