let url = require("url");
let url1 = "https://github.com/Rajendra565?tab=repositories";
let url2 = url.parse(url1, true);
console.log(url2.port);
