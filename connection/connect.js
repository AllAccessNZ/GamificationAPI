var sql = require("mysql");
var connect = function(){
    var conn = new sql.createConnection({
        host     : 'localhost',
        database : 'gameboard',
        user     : 'root',
        password : '',
    });

    return conn;
};

module.exports = connect;