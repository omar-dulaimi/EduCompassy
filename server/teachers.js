
var queryTeachers = require('../db/mysql/query/queryTeachers.js');

module.exports = {
    queryTeachers: function (req, res, callback) {
        queryTeachers.selectAllTeachers(req, function (err, errType, sqlResult) {
            if (errType === 1) {

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

    createTeachers: function (req, res, callback) {
        queryTeachers.createTeacher(req, function (err, errType, sqlResult) {
            if (errType === 1) {

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

    searchTeachers: function (req, callback) {
        queryTeachers.searchTeacher(req, function (err, errType, sqlResult) {
            if (errType === 1) {

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

    // Delete Teacher By ID:

    deleteTeachers: function (id, callback) {
        queryTeachers.deleteTeacher(id, function (err, errType, sqlResult) {
            if (errType === 1) {

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
    }
}
