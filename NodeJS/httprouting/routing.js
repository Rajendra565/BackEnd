const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  } else if (req.url === "/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Login Page</h1>");
    res.end();
  } else if (req.url === "/register") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Register Page</h1>");
    res.end();
  } else if (req.url === "/profile") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Profile Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});
server.listen(3000, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  }
  console.log("Server is running on port 3000");
});
