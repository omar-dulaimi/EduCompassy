var mysql = require('mysql');

var db = require('../conn');

module.exports = {
  selectuseremail: function (inputEmail, callback) {

    console.log("else - body.inputEmail: ", inputEmail)
    var qu1 = `SELECT * FROM userid WHERE email="${inputEmail}"`;
    var qu2 = `SELECT * FROM userid WHERE email=?`;
    db.query(qu2, inputEmail,
      function (err, result) {
        if (err) {
          console.log('NotWorking', err);

          callback(err, 2, null)
        } else {
          console.log("Result", result[0]);
          callback(null, result[0])
        }
      })
  }
}