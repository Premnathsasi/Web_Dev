const http = require('http');
const name= 'Premnath'
const server = http.createServer((req, res) => {
    console.log(name)
    res.end(name);
});

server.listen(4000);

