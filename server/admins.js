
const A = require('./admins.js');
var queryuserid = require('../db/mysql/query/queryadmins.js');



module.exports = {
    runAll: function() {
        A.runA();
        G.runG();
        M.runM();
        O.runO();
    }
 }
