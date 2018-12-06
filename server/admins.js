
const A = require('./admins.js');
var queryAdmins = require('../db/mysql/query/queryadmins.js');



module.exports = {
    queryAdmins: function (req, res, callback) {
        queryAdmins.selectAllAdmin(req, function (err, errType, sqlResult) {
            if (errType===1) {
                
                var errObj = {
                    // Type 1: DB err
                    type: 1,
                    err: err,
                };
                callback(errObj, null);
            } else {
            
            // if (sqlResult === undefined) {
                if (errType === 2) {
                var errObj = {
                    // Type 3: Query Error.
                    type: 3,
                    err: err,
                };
                callback(errObj, null);
                //res.end(JSON.stringify({canLog: false}));
            } else {
                console.log("else: sqlResult ", sqlResult.email);
                if (sqlResult !== undefined) {
                    var errObj = {
                        // Type 0: No errors.
                        type: 0,
                        err: null,
                    };
                    callback(errObj, sqlResult);
                // res.end(JSON.stringify({canLog: true}));
                } else {
                    var errObj = {
                        // Type 3: Table is empty.
                        type: 3,
                        err: 'Table is empty',
                    };
                    callback(errObj, null);
                // res.end(JSON.stringify({canLog: false}));
                }
            }
            
            }
        });
    },
 }
