const fs=require('fs')
const filename='test.txt';

//*_____________________________________________________________________________________
 
// * fs.writefile(): writes data to a file . if the file does not exist,it will be created. if the file exists, it overwrite the content.

// ! syntax: fs.writeFilesync(filepath,data,options,(err)=>{
// if(err) console.error(err)
// else console.log("file has been saved")
// });
// ?filepath:The file path to write to 
// ?data: The content to write to the file
// ?options: optional. Includes encoding ('utf8'),mode ,or flags.

//________________________________________________________________________________________


fs.writeFile(filename,"Rajendra kumar",'utf-8',(err)=>{
  if(err) console.error(err)
  else console.log("File has been write file")
})



//*_____________________________________________________________________________________
 
// * fs.readfile(): Reads a file's content and returns it as a string or Buffer

// ! syntax: fs.readfile(filepath,utf-8,(err,data)=>{
  // if(err) console.error(err)
  // else console.log(data)
  // })
// ?filepath:The file path to write to 
// ?err :write error 
// ?data: The content to read to the file
// ?options: optional. Includes encoding ('utf8'),mode ,or flags.

//________________________________________________________________________________________


const readfile=fs.readFile(filename,'utf-8',(err,data)=>{
  if(err) console.error(err)
    else console.log(data)
})
console.log(readfile)


// *_______________________________________________________________________________
// * fs.appendFile(): Appends data to a file. If the File does not exist,it Creates the file.
// !Syntax: fs.appendfileSync(filepath,data,opctional,(err)=>{if(err) console.error(err)})
// ? fileoath: path of the file to read.
// ?data: The content to write to the file
// ? options: Optional. encoding ('utf8') to get data as a string.
// *_______________________________________________________________________________

fs.appendFile(filename," \nthis is last name Badatya",(err)=>{
  if(err) console.log(err)
})

// *_______________________________________________________________________________
// *Delete file (fs.unlinkSync()): Deletes a file by its path
// !syntax: fs.unlinksync(filepath);
// ?filepath:The path of the file to delete
// *_______________________________________________________________________________
fs.unlink(filename,(err)=>{
  if(err) console.log(err)
})