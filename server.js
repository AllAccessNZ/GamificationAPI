const express = require('express');
const app = express();
const mysql = require('mysql');
 
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_task_demo'
});
 
// connect to database
mc.connect();
 
// default route
app.get('/', function (req, res) {

    return res.json({"Message":"API IS SUCCESSFULLY HANDLING API REQUESTS"});
});