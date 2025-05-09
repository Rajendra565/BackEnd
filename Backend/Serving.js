const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/home" || req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.writeHead(200, { "Content-Type": "application/json" });
    // fs.readFile("data.json", (err, data) => {
    //   if (err) throw err;
    //   fs.createReadStream("./data.json").pipe(res);

    //   // res.write("<h1>Home Page</h1>");
    //   res.end();
    // });
    fs.createReadStream("./data.json").pipe(res);
  } else if (res.url === "/style") {
    res.writeHead(200, { "Content-Type": "text/css" });
    fs.createReadStream("./style.css").pipe(res);
    res.end();
  }
});
server.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is running on port 3000");
});
