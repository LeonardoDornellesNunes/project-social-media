const http = require("node:http");
const rotes = require("./routing.js");

const serverConnection = http.createServer((req, res) => {
    res.write("Server On");
    res.end();
});

serverConnection.listen(3000, () => console.log("server on"));