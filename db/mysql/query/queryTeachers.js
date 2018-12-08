var db = require('../conn');

module.exports = {
  selectAllTeachers: function (inputEmail, callback) {
    console.log("else - Select * From teachers: ")
    var qu = `SELECT * FROM teachers`;
    db.query(qu,
      function (err, result) {
        if (err) {
          console.log('NotWorking', err);
          callback(err, 3, null)
        } else {
          console.log("Result");
          console.log(result);
          callback(null, 0, result)
        }
      })
  },

  createTeacher: function (req, callback) {
    console.log("else - Insert * From teachers: ")
    console.log("queryAdBody: ", req.body);
    var qu = `INSERT INTO teachers (first_name, middle_names, last_name, date_of_birth, date_of_employment, phone_number, id_number) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    var quValue = [req.body.first_name, req.body.middle_names, req.body.last_name, req.body.date_of_birth, req.body.date_of_employment, req.body.phone_number, req.body.id_number]
    db.query(qu, quValue,
      function (err, result) {
        if (err) {
          console.log('NotWorking', err);
          callback(err, 3, null)
        } else {
          console.log("Result");
          console.log(result);
          callback(null, 0, result)
        }
      })
  },

  searchTeacher: function (req, callback) {
    console.log("else - Select * From teachers: ")
    var qu = `SELECT * FROM teachers WHERE `;
    var quColumn = [];
    var quValue = [];
    var quColumnStr = '';

    for (key in req.body) {
      if (req.body[key]) {
        quColumn.push(key + ' = ?')
        quValue.push(req.body[key])
      }
    }

    quColumnStr = quColumn.join(' && ');
    console.log("qu", qu);
    console.log("quColumnStr", quColumnStr);
    qu = qu.concat(quColumnStr);
    console.log("qu", qu);
    console.log("quColumn", quColumn);
    console.log("quValue", quValue);

    db.query(qu, quValue,
      function (err, result) {
        if (err) {
          console.log('NotWorking', err);

          callback(err, 3, null)
        } else {
          console.log("Result");
          console.log(result);
          callback(null, 0, result)
        }
      })

  },

  // Delete Teacher by ID: 
  deleteTeacher: function (id, callback) {
    console.log("else - Delet From teachers : ")
    var qu = `DELETE FROM teachers WHERE id = ?`;

    db.query(qu, id,
      function (err, result) {
        if (err) {
          console.log('NotWorking', err);

          callback(err, 3, null)
        } else {
          console.log("Result");
          console.log(result);
          callback(null, 0, result)
        }
      });
  }
}