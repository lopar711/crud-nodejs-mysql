const express = require("express");
const Router = express.Router();
const mySQLConnection = require("../connection");

Router.get("/paises",(req, res)=>{
    //console.log(req);
    mySQLConnection.query("SELECT * FROM country LIMIT 10",(err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send(err.sqlMessage);
        }
    })

})
Router.get("/paises/code/:codigo",(req, res)=>{
    //console.log(req);
    let codigo = req.params.codigo;
    mySQLConnection.query("SELECT * FROM country WHERE code = '"+codigo+"'",(err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send(err.sqlMessage);
        }
    })

})

Router.get("/paises/name/:name",(req, res)=>{
    //console.log(req);
    let name = req.params.name;
    mySQLConnection.query("SELECT * FROM country WHERE name = '"+name+"'",(err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send(err.sqlMessage);
        }
    })

})
module.exports = Router;