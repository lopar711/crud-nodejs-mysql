const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var mysqlConection = mysql.createConnection({
    host:"localhost",
    user : "root",
    password:"",
    database:"world_x",
    multipleStatements: true
});

mysqlConection.connect(err=>{
    if(err){
        console.log(err.sqlMessage);
    }else{
        console.log("conectado a la BD exitosamente");
    }
} ); 

app.listen(3000); 
 