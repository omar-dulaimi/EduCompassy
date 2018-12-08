var mysql = require('mysql');

var db = require('../conn');

module.exports = {
  // selectAllAdmin: function (inputEmail, callback) {
  //   console.log("else - Select * From admin: ")
  //   var qu = `SELECT * FROM admin`;
  //   db.query(qu,
  //     function (err, result) {
  //       if (err) {
  //         console.log('NotWorking', err);
  //         callback(err, 3, null)
  //       } else {
  //         console.log("Result");
  //         console.log(result);
  //         callback(null, 0, result)
  //       }
  //     })
  // },

  createcomplaint: function (body, callback) {
   


    console.log("else - Insert * From complaints: ")
    console.log("queryAdBody: ", body);
    var qu = `INSERT INTO complaints (parent_name, title, message) VALUES (?, ?, ?)`;
    var quValue = [body.parent_name, body.Title, body.Message ]
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

  // CREATE TABLE IF NOT EXISTS `EduCompassy`.`complaints` (
  //   `id` INT NOT NULL AUTO_INCREMENT,
  //   `date_of_send` VARCHAR(45) NULL,
  //   `date_of_process` VARCHAR(45) NULL,
  //   `parents_id` INT  NULL,
  //   `teacher_id` INT  NULL,
  //   `parent_name` VARCHAR(45) NULL,
  //   `title`VARCHAR(45) NULL,
  //   `message`VARCHAR(45) NULL,
  //   PRIMARY KEY (`id`));



  // searchAdmin: function (req, callback) {
    
  //   console.log("else - Select * From admin: ")
  //   var qu = `SELECT * FROM admin WHERE `;
  //   var quColumn = [];
  //   var quValue = [];
  //   var quColumnStr = '';

  //   for (key in req.body) {
  //     if (req.body[key]) {
  //       quColumn.push(key + ' = ?')
  //       quValue.push(req.body[key])
  //     }
  //   }

  //   quColumnStr = quColumn.join(' && ');
  //   console.log("qu", qu);
  //   console.log("quColumnStr", quColumnStr);
  //   qu = qu.concat(quColumnStr);
  //   console.log("qu", qu);
  //   console.log("quColumn", quColumn);
  //   console.log("quValue", quValue);

  //   db.query(qu, quValue,
  //     function (err, result) {
  //       if (err) {
  //         console.log('NotWorking', err);

  //         callback(err, 3, null)
  //       } else {
  //         console.log("Result");
  //         console.log(result);
  //         callback(null, 0, result)
  //       }
  //     })

  // },

  // Delete Admin by ID: 
//   deleteAdmin: function (id, callback) {

//     console.log("else - Delet From admin : ")
//     var qu = `DELETE FROM admin WHERE id = ?`;

//     db.query(qu, id,
//       function (err, result) {
//         if (err) {
//           console.log('NotWorking', err);

//           callback(err, 3, null)
//         } else {
//           console.log("Result");
//           console.log(result);
//           callback(null, 0, result)
//         }
//       })

//   },
 }