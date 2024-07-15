const {sum} = require("./helper");
const http = require("http");

const server = http.createServer((req,res) => {
    res.end("Hello world");
});
server.listen(3000);


const total = sum(10,20);
console.log(total);

