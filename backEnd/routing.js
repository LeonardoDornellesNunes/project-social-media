const path = require("node:path");
const express = require("express");
const routerMainHomePage = express.Router();
const routerLoginPage = express.Router();
const app = express();

routerMainHomePage.get("/", (req, res,) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/homePage/indexHomePage.html");
});

routerMainHomePage.get("/styleHomePage.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/homePage/styleHomePage.css");
});

routerMainHomePage.get("/mainHomePage.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/homePage/mainHomePage.js");
});

routerLoginPage.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/loginPage/indexLoginPage.html");
});

routerLoginPage.get("/styleLoginPage.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/loginPage/styleLoginPage.css");
});

routerLoginPage.get("/mainLoginPage.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontEnd") + "/loginPage/mainLoginPage.js");
});

module.exports = {
    routerMainHomePage: routerMainHomePage,
    routerLoginPage: routerLoginPage,
};