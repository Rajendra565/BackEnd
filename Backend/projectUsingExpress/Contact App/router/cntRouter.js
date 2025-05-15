const{Router}=require('express')
const router=Router()
const cntSchema=require('../model/contactSchem')

router.get("/addContact",(req,res)=>{
    res.render('contact/addContact',{title:'Add Contact'})
})

router.post('/addContact',async(req,res)=>{
    await cntSchema.create(req.body)
    res.redirect('/api/allContacts')

    
})
//! for displying in browser by using handlebars
router.get('/allContacts',async(req,res)=>{
   let payload= await cntSchema.find().lean()
    res.render('contact/conlist',{title:'Contact List',payload})

    
})
// !displaying a single contact by coping a id from DB.
router.get('/:id',async(req,res)=>{
    let payload= await cntSchema.findOne({_id:req.params.id}).lean()
     res.render('contact/singleCont',{title:'Single Contact',payload})
 
     
 })

 // !Updating a single contact by coping a id from DB.
router.get('/edit/:id',async(req,res)=>{
    let payload= await cntSchema.findOne({_id:req.params.id}).lean()
     res.render('contact/editContact',{title:'Edit Contact',payload})
 
     
 })
 // ! After Updating Saving the changes
router.post('/edit/:id',async(req,res)=>{
    let payload= await cntSchema.findOne({_id:req.params.id})
    payload.fname=req.body.fname
    payload.lname=req.body.lname
    payload.phno=req.body.phno
    payload.loc=req.body.loc
     
    await payload.save()
    res.redirect('/api/allContacts')
})


    // !deleting a contact by using id
    router.get('/delete/:id',async(req,res)=>{
    await cntSchema.deleteOne({_id:req.params.id})
     res.redirect('/api/allContacts')
 })




module.exports=router