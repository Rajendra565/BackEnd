const {Schema,model}=require('mongoose');
const CNtSchema=new Schema({
  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
  phoneno:{
    type:Number,
    required:true
  },
  loc:{
    type:String,
    enum:['Sim','Email','Moblie'],
    required:true
  }
})
module.exports=model('Contact_App',CNtSchema,"Contact_App")