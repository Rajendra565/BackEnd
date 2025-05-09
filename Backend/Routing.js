const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Home Page</h1>");
      res.end();
    } else if (req.url == "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>About Page</h1>");
      return res.end();
    } else if (req.url == "/login") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Login Page</h1>");
      res.end();
    } else if (req.url == "/service") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Service Page</h1>");
      return res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
