const mysql = require("mysql2/promise");
const myData = require("./private.js");

async function testFunction() {

    const connection = await mysql.createConnection({
        host: "localhost",
        user: myData.dataBaseUser,
        password: myData.dataBasePassword,
        database: "testdb",
    });

    const response = await connection.query("show databases;");

    console.log(typeof response);

}

testFunction();