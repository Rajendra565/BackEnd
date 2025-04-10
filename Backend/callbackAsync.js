const Fs = require("fs");
// Fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) console.error(err);
//   console.log(data);
// });
// console.log(readfile);

// Fs.writeFile("app.text", "Rajendra", (err) => {
//   if (err) throw err;

//   console.log("Data Write file done");
// });

Fs.appendFile("./app.text", " \n kumar bdatya", (err) => {
  if (err) throw err;
});
