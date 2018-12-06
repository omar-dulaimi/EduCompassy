
const A = require('./A/index.js');
const G = require('./G/index.js');
const M = require('./M/index.js');
const O = require('./O/index.js');


const admins = require('./admins.js');


module.exports = {
    runAll: function() {
        A.runA();
        G.runG();
        M.runM();
        O.runO();
    }
 }
