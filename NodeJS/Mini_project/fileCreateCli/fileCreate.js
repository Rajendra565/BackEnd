import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const showMen = () => {
  console.log("\n 1:Create a file");

  console.log(" 2: Read file");
  console.log(" 3: Exit");
  console.log(" 4: close");
  rl.question("Choose an options:", fileCreateion);
};
// 1: enter the file name
// 2: enter the content
function fileCreateion(option) {
  if (option == 1) {
    rl.question("Enter your filename: ", (filename) => {
      rl.question("Enter your file content for your file: ", (content) => {
        fs.writeFileSync(`${filename}.txt`, content, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`file"${filename}.txt " created successfully`);
          }
        });
      });
    });

    // showMen()
  } else if (option == 2) {
  }
}

showMen();
