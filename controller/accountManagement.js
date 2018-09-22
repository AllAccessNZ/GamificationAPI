var express = require('express');
var router = express.Router();
var connection = require("../connection/connect")();

var routes = function (){

    // Create user endpoint
    router.route('/createUser')
        .post(function (req, res){
            // SQL query to check if username exists
            connection.query('SELECT username FROM `users` WHERE users.username LIKE "'+req.body.username+'"', function (error, results, fields) {
                try {
                    if (results[0].username == req.body.username){
                        res.status(200).json("Username already exists");
                    }
                } catch (e) {
                    try {

                        // SQL query to insert user into the database
                        connection.query('INSERT INTO `users`(`image`, `username`, `points`, `rank`) VALUES ("'+req.body.image+'","'+req.body.username+'", 0, 0)', function (error, results, fields) {

                            res.status(200).json("Account created"); 
                        });

                    } catch (error) {
                        res.status(200).json("Something went wrong with creating your account");
                    }
                }      
            });
            
        });

        router.route('/getProfile/:user')
        .get(function(req, res){
            // SQL query to find a user from the database
            connection.query('SELECT * from `users` WHERE `username` LIKE "'+req.params.user+'"', function (error, results, fields) {

                res.json(results); 
            });
        })

        router.route('/updateScore/:user')
        .put(function(req, res){
        
            connection.query('UPDATE `users` SET `points`=`points`+1 WHERE username = "'+req.body.username+'"', function (error, results, fields) {
                try {
                } catch (e) {
                    res.status(200).json("Error");
                }      
            });
        })

    return router;
};
module.exports = routes;