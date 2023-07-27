// const http = require("http");
// const name = "Premnath";
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/home") {
//     res.write("<html>");
//     res.write("<head><title> My first page</title></head>");
//     res.write("<body><h1>Welcome home</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/about") {
//     res.write("<html>");
//     res.write("<head><title> My first page</title></head>");
//     res.write("<body> <h1>Welcome to About Us page</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title> My first page</title></head>");
//   res.write("<body><h1>Welcome to my Node Js project </h1></body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(4000);

const http = require("http");

const routes = require('./routes')

const server = http.createServer(routes.handler);

server.listen(4000);
