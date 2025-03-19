
const Http=require('http')
const createServer=Http.createServer((req,res)=>{
  if(req==='/about'){
    res.write("About page")
    res.end()
  }
  if(req==="/home")

  {
    res.write("Home page")
    res.end()
  }
})
createServer.listen(3000,()=>{
  console.log("server runing 3000")
})