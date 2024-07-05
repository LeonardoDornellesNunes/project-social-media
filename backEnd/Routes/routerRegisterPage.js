const path = require("node:path");
const express = require("express");
const app = express();
const router = express.Router();

router.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/registerPage/indexRegisterPage.html");
});

router.get("/styleRegisterPage.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/registerPage/styleRegisterPage.css");
});

router.get("/mainRegisterPage.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontEnd") + "/registerPage/mainRegisterPage.js");
});

module.exports = router;