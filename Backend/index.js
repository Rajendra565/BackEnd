import expres from "express"

const app=expres()
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
app.get('/home',(req,res)=>{
  res.send("i am about page")
})
app.get('/api/data',(req,res)=>{
  const apidata=[
    {
      "id":1,
      "name":"Rajendra"
    },
    {
      "id":2,
      "name":"kumar"
    },
    {
      "id":3,
      "name":"badatya"
    },
    {
      "id":1,
      "name":"Rajendra"
    }
  ]
  res.send(apidata)
})

app.listen(3000,(err)=>{
  console.log("server runing on 3000")
})