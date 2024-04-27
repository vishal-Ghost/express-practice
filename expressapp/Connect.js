const mysql = require('mysql2');

const db = mysql.createPool({
    host:'localhost',
    user:'Vishal',
    password:'Pass@123',
    database:'qa'
})

module.exports = db;