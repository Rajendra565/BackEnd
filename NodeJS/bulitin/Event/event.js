const eventEmitter=require('events')
const emitter=new eventEmitter();
emitter.on("greet",()=>{
  console.log("Hi i am Rajendra kumar")
})

emitter.emit('greet')
