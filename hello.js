let obj=[
  {
    key:"sample1",
    name:"Rajendra",
    age:21,
  },
  {
    key:"sample2",
    name:"kumar",
    age:22,
  },
  {
    key:"sample3",
    name:"pabitra",
    age:23,
  }
]
let obj2={};
obj.forEach((item)=>{
  if(!obj2[item.key]){     
    obj2[item.key]=[item];
  }
   
  // obj2[item.key]=[item];
})
console.log(obj2);