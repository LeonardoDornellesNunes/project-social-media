const path = require("node:path");
const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res,) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/homePage/indexHomePage.html");
});

router.get("/styleHomePage.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/homePage/styleHomePage.css");
});

router.get("/mainHomePage.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/homePage/mainHomePage.js");
});

module.exports = router;