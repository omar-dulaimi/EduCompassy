var mysql = require('mysql');

var db = require('../conn');

module.exports = {
  selectAllAdmin: function(inputEmail, callback) {
        db.query('USE EduCompassy', function (err) {
            if (err) {
              console.log("Cannot Use Database: EduCompassy");
              console.log(err);
              callback(err, 1, null)
            } else {
              console.log("else - Select * From admin: ")
              var qu = `SELECT * FROM admin`; 
              db.query(qu, 
                function(err, result){
                  if (err) {
                    console.log('NotWorking', err);

                    callback(err, 3, null)
                  } else {
                    console.log("Result");
                    console.log(result);
                    callback(null, 0, result)
                  }
              })
            }
        });
    }
 }

 /**
  
 CREATE TABLE IF NOT EXISTS `EduCompassy`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `date_of_birth` VARCHAR(45) NULL,
  `date_of_employment` DATE NOT NULL,
  `phone_number` INT NOT NULL,
  `id_number` INT NOT NULL,
  PRIMARY KEY (`id`));

  */