const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();

router.post("/loginAuthentication", bodyParser.urlencoded({extended: false}), (req, res) => {
    console.log(req.body);
    res.send("Hi");
}, (err) => console.log(err));

module.exports = router;
