const routing = require("./routing.js");
const express = require("express");
const app = express();

app.use(routing);

app.listen(3000, () => console.log("Server On"));