const path = require("path");

// it provide the aboslut  directory path of the currently execting file
console.log(__dirname);
// it provide the absolut path of the currently executing file
console.log(__filename);

// it return an object with datails about a given path including root, dir,base,ext and name
console.log(path.parse(__dirname));
console.log(path.parse(__filename));

//  join multiple path segments into one using the appoprite separotor ('on window/linux)
console.log(path.join(__filename, "Rajendra", "kuamr"));

// Resolve a sequen of path into an absoulute path, sturtin from the current directory
console.log(path.resolve("Rajendra", "Kumar"));

//path.extname() extracts the file extension from a given path
console.log(path.extname(__filename));

// path.basename() return the lest part of a path (eq,file name with extersion)

console.log(path.basename(__filename));

// path.dirname() return the directory path of a path
console.log(path.dirname(__filename));
// path.sep() return the platform-specific path segmant separator (\for windows /forlinux /macOs)
console.log(path.sep());

// 1. Get the directory name of a path
console.log(
  "Directory Name:",
  path.dirname("c:/Users/Rajendra/Desktop/file.txt")
);

// 2. Get the base name (file name with extension) of a path
console.log("Base Name:", path.basename("c:/Users/Rajendra/Desktop/file.txt"));

// 3. Get the file extension of a path
console.log(
  "File Extension:",
  path.extname("c:/Users/Rajendra/Desktop/file.txt")
);

// 4. Join multiple path segments into one
console.log(
  "Joined Path:",
  path.join("c:/Users", "Rajendra", "Desktop", "file.txt")
);

// 5. Resolve a sequence of paths into an absolute path
console.log("Resolved Path:", path.resolve("Desktop", "file.txt"));

// 6. Normalize a path (fixes '..', '.', and slashes)
console.log(
  "Normalized Path:",
  path.normalize("c:/Users//Rajendra/../Desktop/file.txt")
);

// 7. Parse a path into an object
console.log("Parsed Path:", path.parse("c:/Users/Rajendra/Desktop/file.txt"));

// 8. Format a path object into a string
const pathObject = {
  root: "c:/",
  dir: "c:/Users/Rajendra/Desktop",
  base: "file.txt",
  ext: ".txt",
  name: "file",
};
console.log("Formatted Path:", path.format(pathObject));

// 9. Check if a path is absolute
console.log(
  "Is Absolute Path:",
  path.isAbsolute("c:/Users/Rajendra/Desktop/file.txt")
);

// 10. Get the relative path from one path to another
console.log(
  "Relative Path:",
  path.relative("c:/Users/Rajendra/Desktop", "c:/Users/Rajendra/Documents")
);

// 11. Get the platform-specific path delimiter
console.log("Path Delimiter:", path.delimiter);

// 12. Get the platform-specific path separator
console.log("Path Separator:", path.sep);

// 13. Get the current working directory's path
console.log("Current Directory:", __dirname);

// 14. Get the current file's path
console.log("Current File:", __filename);
