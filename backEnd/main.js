const http = require("http");
const port = 3000;


http.createServer(function (req, res) {
    res.write("hi server node");
    res.end();
}).listen(port);

