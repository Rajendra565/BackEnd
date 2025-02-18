// ?Challange: "Event Maestro: Handle it All!"

// !Objective
// *Create a program using Node.js EventEmitter that:

// ? Listens for multiple types of User Events (e.g.,login,logout,purchase,and profile updata).
// ? Tracks how many times each event is emitted.
// ? Logs a summary af all event occurrences when a special summary event is triggered

// ! Requirements
// ? Create at least four custom event (e.g.,user-login,user-logout,user-purchase,profile-update);
// ? Emit these event multiple  times with different arguments (e.g., Username,item purchased).
// ? Track and store the count of each event type.
// ? Define a summary event that logs a detailed report of how many time each event was triggered.


const eventEmitter=require('events')

let eventCouter={
  "user-login":0,
  "user-logout":0,
  "user-purchase":0,
  "profile-update":0
}

const emitter= new eventEmitter()
emitter.on('login',(name)=>{
  eventCouter['user-login']++;
  console.log(name, "is login sucessfull")
})

emitter.on('purchase',(name,item)=>{
  eventCouter['user-purchase']++
  console.log(name,item,  "purchase sucessfull")
})

emitter.on('profile-updata',(name,updata)=>{
  eventCouter['profile-update']++
  console.log(name, updata ," updata sucessfull")
})

emitter.on('logout',(name)=>{
  eventCouter['user-logout']++
   console.log(name, " your account logout")
})

emitter.on('summary',()=>{
console.log(eventCouter)
})





emitter.emit('login','Rajendra')
emitter.emit('login','Rajendra')
emitter.emit('purchase','Rajendra',"new phone")
emitter.emit('purchase','Rajendra',"new phone")
emitter.emit('purchase','Rajendra',"new phone")
emitter.emit('profile-updata',"Rajendra "," email")
emitter.emit('logout',"Rajendra ")


emitter.emit('summary')