
import readline from 'readline'

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const todo=[]
const showMen=()=>{
  console.log('\n 1:Add a Task')

  console.log(' 2: view Tasks')
  console.log(' 3: Exit')
  rl.question('Choose an options:', handleInput)
}
const handleInput=(option)=>{
  if(option === '1'){
    rl.question("Enter the Task : ",(task)=>{
      todo.push(task)
      console.log("Task added: ",task);
      showMen()
    })       
  }
 else if(option==='2'){
    console.log("\n Your Todo Lists");
    if(todo.length==0){
      console.log(" Your todo is empty")
    }

    todo.forEach((task,index)=>{
      console.log(`${index+1}.${task}`)
    })
    showMen()
    
  }
  else if(option==='3'){
    console.log("Good byee see you again")
    rl.close()

  }
  else{
    console.log("Invalid Option. Please try again");
    showMen()

  }
}

showMen()