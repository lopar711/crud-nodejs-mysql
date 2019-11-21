const mysql = require("mysql");
var mysqlConection = mysql.createConnection({
    host:"localhost",
    user : "root",
    password:"",
    database:"world_x",
    multipleStatements: true
});

mysqlConection.connect(err=>{
    if(err){
        console.log(err.code);
    }else{
        console.log("conectado a la BD exitosamente");
    }
} ); 

module.exports = mysqlConection;