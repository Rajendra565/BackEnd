let arr=[
  {
    name:"a",
    age:20,
  },
  {
    name:"b",
    age:21,
  },
  {
    name:"c",
    age:22,
  },
  {
    name:"d",
    age:20,
  }
]
let obj2={};
arr.forEach((item)=>{
  if(obj2[item.age]){     
    obj2[item.age].push(item.name);
  }else{
    obj2[item.age]=[item.name];
  }
  
})

console.log(obj2);