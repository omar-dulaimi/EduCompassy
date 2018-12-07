var queryuserid = require('../db/mysql/query/queryuserid.js');

module.exports = {
    queryUserID: function (req, res, callback) {
        queryuserid.selectuseremail(req.body.inputEmail, function (err, errType, sqlResult) {

            // if (sqlResult === undefined) {
            if (errType === 2) {
                var errObj = {
                    // Type 2: User Does not exist.
                    type: 2,
                    err: 'User Does not exist',
                };
                callback(errObj, null);

            } else {
                console.log("else: sqlResult ", sqlResult.email);
                if (req.body.inputPassword === sqlResult.password) {
                    var errObj = {
                        // Type 0: No errors.
                        type: 0,
                        err: null,
                    };
                    callback(errObj, sqlResult);
                } else {
                    var errObj = {
                        // Type 2: User / Password Do not match.
                        type: 3,
                        err: 'Password Do not match',
                    };
                    callback(errObj, null);
                }
            }
        });
    },
}
