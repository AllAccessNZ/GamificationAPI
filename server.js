const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(6969, function () {
    console.log('Max and Saksham have their beefy API on port: 6969. Created at: '+Date.now());
});
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

// test route
app.get('/test', function (req, res) {

    return res.json({"Message":"API IS SUCCESSFULLY HANDLING API REQUESTS"});
});
 
//--------- FOR LATER ;) -----------//
// connection configurations
/*const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_task_demo'
});
 
// connect to database
mc.connect();
*/