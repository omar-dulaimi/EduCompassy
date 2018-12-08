var queryComplaintsDB = require('../db/mysql/query/queryComplaints.js');

module.exports = {
    queryComplaints: function (req, res, callback) {
        queryComplaintsDB.createcomplaint(req.body, function (err, errType, sqlResult) {

            // if (sqlResult === undefined) {
            if (errType === 3) {
                var errObj = {
                    // Type 3:table query error.
                    type: 3,
                    err: ' table query error',
                };
                callback(errObj, null);

            } else {
                console.log("else: sqlResult ", sqlResult);
             
                    var errObj = {
                        // Type 0: No errors.
                        type: 0,
                        err: null,
                    };
                    callback(errObj, sqlResult);
                
            }
        });
    },
}
