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
    console.log('Max and Saksham and Kaylan have their beefy API on port: 6969. Created at: '+Date.now());
});

// test route
app.get('/test', function (req, res) {

    return res.json({"Message":"API IS SUCCESSFULLY HANDLING API REQUESTS"});
});

// Import and use the accountManagement JS
var accountManagement = require('./controller/accountManagement')();
app.use("/account", accountManagement);

// Import and use the boardManagement JS
var boardManagement = require('./controller/boardManagement')();
app.use("/board", boardManagement);