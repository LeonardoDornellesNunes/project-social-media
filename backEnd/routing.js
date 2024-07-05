const path = require("node:path");
const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res,) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/mainHomePage/index.html");
});

router.get("/style.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/mainHomePage/style.css");
});

router.get("/main.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/mainHomePage/main.js");
});

router.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/loginPage/index.html");
});

module.exports = router;