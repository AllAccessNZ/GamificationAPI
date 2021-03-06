var express = require('express');
var router = express.Router();
var connection = require("../connection/connect")();


var routes = function (){

    router.route('/getLeaderboard')
    .get(function(req, res){
        res.setHeader('Access-Control-Allow-Origin', '*');
        // SQL query to find a user from the database
        connection.query('SELECT * from `users` ORDER BY `points` DESC', function (error, results, fields) {

            res.json(results); 
        });
    })

    router.route('/getLeader')
    .get(function(req, res){
        res.setHeader('Access-Control-Allow-Origin', '*');
        connection.query('SELECT username, points from `users` ORDER BY `points` DESC LIMIT 1', function (error, results, fields) {

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(results); 
        });
    })

    return router;
};
module.exports = routes;