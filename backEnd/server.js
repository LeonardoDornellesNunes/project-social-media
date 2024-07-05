const routing = require("./Routes/routing.js");
const express = require("express");
const app = express();

app.use(routing.routerMainHomePage);
app.use(routing.routerLoginPage);

app.listen(3000, () => console.log("Server On"));