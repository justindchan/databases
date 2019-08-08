var mysql = require('mysql');
var express = require('express');
var app = express();
var db = require('../db');

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

// connection.connect((err) => {
//   if (err) throw err;
// });

// connection.query('INSERT INTO messages SET ?')

module.exports = connection;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


