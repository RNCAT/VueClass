'use strict';
const mysql = require('mysql');
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bookshopvuejsdb'
});
dbConn.connect(function(err) {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected!");
});
module.exports = dbConn;