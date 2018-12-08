var mysql = require('mysql');



if (process.env.NODE_ENV === 'production') {
  var conn = mysql.createConnection({
    host: "db4free.net:3306",
    user: "clustererjsx",
    password: "N$d5^3J3*fDS",
    database: "educompassy"
  });
} else {
  var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "educompassy"
  });
}
module.exports = conn;