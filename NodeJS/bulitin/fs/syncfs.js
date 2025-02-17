const fs=require('fs')
const path=require('path')
const filename="test.txt";
const filepath=path.join(__dirname,filename)



//*_____________________________________________________________________________________
 
// * fs.writefileSync(): writes data to a file . if the file does not exist,it will be created. if the file exists, it overwrite the content.

// ! syntax: fs.writeFilesync(filepath,data,options);
// ?filepath:The file path to write to 
// ?data: The content to write to the file
// ?options: optional. Includes encoding ('utf8'),mode ,or flags.

//________________________________________________________________________________________





// const writeFile=fs.writeFileSync(filename,"R");

// console.log(filepath)


// *_______________________________________________________________________________

// * fs.readFileSync(): Reads a file's content and returns it as a string or Buffer

// ! Syntax: const data=fs.readFileSync(filepath,options);
// ? fileoath: path of the file to read.
// ? options: Optional. encoding ('utf8') to get data as a string.

// *_______________________________________________________________________________


// const readFile=fs.readFileSync(filename,"utf-8")
// console.log(readFile)


 
// *_______________________________________________________________________________
// * fs.appendFileSync(): Appends data to a file. If the File does not exist,it Creates the file.
// !Syntax: fs.appendfileSync(filepath,data,opctional)
// ? fileoath: path of the file to read.
// ?data: The content to write to the file
// ? options: Optional. encoding ('utf8') to get data as a string.
// *_______________________________________________________________________________


// const appendfile=fs.appendFileSync(filename,"Rajendra %",'utf-8')

// *_______________________________________________________________________________
// *Delete file (fs.unlinkSync()): Deletes a file by its path
// !syntax: fs.unlinksync(filepath);
// ?filepath:The path of the file to delete
// *_______________________________________________________________________________
// fs.unlinkSync(filename)

fs.writeFileSync(filename,"Rajendra")

// *__________________________________________________________________________________
// fs.renameSync(): Rename a file by its path
// !Syntax: fs.renameSync(oldpath,newpath)
// ?Oldpath:current file path .
// ?newpath: New file path or name
// *__________________________________________________________________________________

fs.renameSync(filename,"newname.txt")



