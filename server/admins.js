
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
            } else {
                console.log("else: sqlResult ", sqlResult.email);
                if (sqlResult !== undefined) {
                    var errObj = {
                        // Type 0: No errors.
                        type: 0,
                        err: null,
                    };
                    callback(errObj, sqlResult);
                } else {
                    var errObj = {
                        // Type 3: Table is empty.
                        type: 3,
                        err: 'Table is empty',
                    };
                    callback(errObj, null);
                }
            }
            
            }
        });
    },

    createAdmins: function (req, res, callback) {
        queryAdmins.createAdmin(req, function (err, errType, sqlResult) {
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
                
            } else {
                console.log("else: sqlResult ", sqlResult);
                if (sqlResult !== undefined) {
                    var errObj = {
                        // Type 0: No errors.
                        type: 0,
                        err: null,
                    };
                    callback(errObj, sqlResult);
                } else {
                    var errObj = {
                        // Type 3: Table is empty.
                        type: 3,
                        err: 'Table is empty',
                    };
                    callback(errObj, null);
                }
            }
            
            }
        });
    },
    
    searchAdmins: function (req, callback) {
        queryAdmins.searchAdmin(req, function (err, errType, sqlResult) {
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
                
            } else {
                console.log("else: sqlResult ", sqlResult);
                if (sqlResult !== undefined) {
                    var errObj = {
                        // Type 0: No errors.
                        type: 0,
                        err: null,
                    };
                    callback(errObj, sqlResult);
                } else {
                    var errObj = {
                        // Type 3: Table is empty.
                        type: 3,
                        err: 'Table is empty',
                    };
                    callback(errObj, null);
                }
            }
            
            }
        });
    },

    // Delet Admin By ID:

    deleteAdmin: function (id, callback) {
        queryAdmins.deleteAdmin(id, function (err, errType, sqlResult) {
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
            } else {
                console.log("else: sqlResult ", sqlResult);
                if (sqlResult !== undefined) {
                    var errObj = {
                        // Type 0: No errors.
                        type: 0,
                        err: null,
                    };
                    callback(errObj, sqlResult);
                } else {
                    var errObj = {
                        // Type 3: Table is empty.
                        type: 3,
                        err: 'Table is empty',
                    };
                    callback(errObj, null);
                }
            }
            
            }
        });
    },
 }
