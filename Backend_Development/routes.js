const fs = require("fs");

let textin = "";
fs.readFile("./message.txt", "utf-8", (err, data) => {
  textin = data;
});
const requestHeader = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(`<h1>${textin}</h1>`);
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk)
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const msg = parsedBody.split("=")[1];
      fs.writeFile("message.txt", msg, (err) => {
        if (!err) {
          fs.readFile("./message.txt", "utf-8", (err, data) => {
            if (!err) {
              textin = data;
              res.statusCode = 302;
              res.setHeader("Location", "/");
              return res.end();
            }
          });
        }
      });
    });
  }
  res.write("<html>");
  res.write("<head><title> My first page</title></head>");
  res.write("<body><h1>Welcome to my Node Js project </h1></body>");
  res.write("</html>");
  res.end();
};
// module.exports = requestHeader
exports.handler = requestHeader;
// module.exports = { handler: requestHeader };
