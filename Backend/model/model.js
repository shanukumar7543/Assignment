let mysql = require('mysql');
require("dotenv").config()

let Connection = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    
})

Connection.connect((err)=>{
    if(err){
        console.log("Error connecting", err.sqlMessage)
    }else{
        console.log("Database Connected Sucessfully")
    }
})

module.exports = Connection;
