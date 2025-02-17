const path=require('path')


// it provide the aboslut  directory path of the currently execting file
console.log(__dirname)
// it provide the absolut path of the currently executing file
console.log(__filename)

// it return an object with datails about a given path including root, dir,base,ext and name
console.log(path.parse(__dirname))
console.log(path.parse(__filename))

//  join multiple path segments into one using the appoprite separotor ('on window/linux)
console.log(path.join(__filename,"Rajendra","kuamr"))

// Resolve a sequen of path into an absoulute path, sturtin from the current directory
console.log(path.resolve("Rajendra","Kumar"))

//path.extname() extracts the file extension from a given path
console.log(path.extname(__filename))

// path.basename() return the lest part of a path (eq,file name with extersion)

console.log(path.basename(__filename))

// path.dirname() return the directory path of a path
console.log(path.dirname(__filename))
// path.sep() return the platform-specific path segmant separator (\for windows /forlinux /macOs)
console.log(path.sep())