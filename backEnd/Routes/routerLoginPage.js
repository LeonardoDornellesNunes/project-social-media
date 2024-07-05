const path = require("node:path");
const express = require("express");
const app = express();
const router = express.Router();

router.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/loginPage/indexLoginPage.html");
});

router.get("/styleLoginPage.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/loginPage/styleLoginPage.css");
});

router.get("/mainLoginPage.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/loginPage/mainLoginPage.js");
});

module.exports = router;