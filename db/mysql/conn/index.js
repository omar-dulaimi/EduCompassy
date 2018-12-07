var mysql = require('mysql');



if (process.env.NODE_ENV === 'production') {
  var conn = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7267836",
    password: "DrmuiVhr4d",
    database: "sql7267836"
  });
} else {
  var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "EduCompassy"
  });
}
module.exports = conn;