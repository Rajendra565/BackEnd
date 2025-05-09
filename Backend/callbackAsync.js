const Fs = require("fs");
// Read file using callback
// Fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) console.error(err);
//   console.log(data);
// });
// console.log(readfile);

//
// Fs.writeFile("app.text", "Rajendra", (err) => {
//   if (err) throw err;

//   console.log("Data Write file done");
// });

// Fs.appendFile("./app.text", " \n kumar bdatya", (err) => {
//   if (err) throw err;
// });

// Fs.mkdir("./Rajendra", { recursive: true }, (err) => {
//   if (err) throw err;
// });

// Fs.writeFile("./Rajendra/Kumar.text", "Rajendra kumar", (err) => {
//   if (err) throw err;
//   console.log("Write file Suecessfully");
// });

Fs.unlink("./Rajendra/Kumar.text", (err) => {
  if (err) throw err;
  console.log("Delet kumar file");
});
