const {Router}=require('express')
const router=Router()
const CntSchema=require('../Model/ContactSchema')



router.get('/addcontact',(req,res)=>{
  res.render('contacts/addContact',{title:"Add Note"})
})

router.post('/addcontact',async(req,res)=>{
  await CntSchema.create(req.body)
  // res.status(201).json({success:true,massage:"contact saved successfully"})
  // let payload=req.body;
  // await CntSchema.create(payload)
  res.redirect('/',302,{})
})
router.get('/allcontacts',async(req,res)=>{
  let payload=await CntSchema.find().lean()
  res.render('contacts/viewContact',{title:"All contact",payload})
})
router.get('/onepage:id',async(req,res)=>{
  let payload=await CntSchema.findOne()
  res.render('contacts/viewContact',{title:"All contact",payload})
})


module.exports=router

