
var queryuserid = require('../db/mysql/query/queryuserid.js');


module.exports = {
    queryUserID: function (req, res, callback) {
        queryuserid.selectuseremail(req.body.inputEmail, function (err, sqlResult) {
            if (err) {
                
                var errObj = {
                    // Type 1: DB err
                    type: 1,
                    err: err,
                };
                callback(errObj, null);
            } else {
            
            if (sqlResult === undefined) {
                var errObj = {
                    // Type 2: User Does not exist.
                    type: 2,
                    err: 'User Does not exist',
                };
                callback(errObj, null);
                //res.end(JSON.stringify({canLog: false}));
            } else {
                console.log("else: sqlResult ", sqlResult.email);
                if (req.body.inputPassword === sqlResult.password) {
                    var errObj = {
                        // Type 0: No errors.
                        type: 0,
                        err: null,
                    };
                    callback(errObj, sqlResult);
                // res.end(JSON.stringify({canLog: true}));
                } else {
                    var errObj = {
                        // Type 2: User / Password Do not match.
                        type: 3,
                        err: 'Password Do not match',
                    };
                    callback(errObj, null);
                // res.end(JSON.stringify({canLog: false}));
                }
            }
            
            }
        });
    },
 }
