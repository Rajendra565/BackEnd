const http=require('http');

const server=http.createServer((req,res)=>{
  if(req.url=='home'){
    res.write("<h1>home page open</h1>")
  }
  if(req.url=='about'){
    res.write("<h1>about page open</h1>")
  }

res.write('<h1>Hi i am Rajendra kuamr badatya like1</h1>')
res.write('<h1>Hi i am Rajendra kuamr badatya like1</h1>')
res.write('<h1>Hi i am Rajendra kuamr badatya like1</h1>')


res.end('<h1>Rajendra kumara badatya </h1>');
})
server.listen(3000,(err)=>{
  if(err) console.log(err)
    else console.log("Server runing in port 3000")
})