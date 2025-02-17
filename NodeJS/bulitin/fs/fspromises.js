const fs=require('fs').promises;
const filename="test.txt"
const file=__dirname

// this is readdir using promises
// fs.promises
// .readdir(file)
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))


// *_______________________________________________________________________________
// // Why .then() and .catch()?
// ? .then() ensures clear chaining of multiple asynchronous operations.
// ? .catch() centralizes error handing, making it easy to debug and mange failures.
// *_______________________________________________________________________________
// this is writefile 
fs.writeFile(filename,"Rajendra kumar badatya1",'utf-8')
  .then(console.log("file added scessfully"))
  .catch((err)=> console.log(err))
// this is read file
fs.readFile(filename)
.then((data)=>console.log(data))
.catch((err)=>console.error(err))

// this is updata file

fs.appendFile(filename,"I am from odisha",'utf-8')
.then(console.log("data updata suessfully"))
.catch((err)=> console.error(err))

// this is delet file
fs.unlink(filename,'utf-8')
.then(console.log("File delet suessfully"))
.catch((err)=>console.log(err))