var db = require("../models");
var express = require("express");
var router = express.Router();

// Routes
module.exports = function () {
	//GET route
	router.get("/", function (req, res) {
		db.User.findAll({}).then(function (results) {
			console.log("Got here!");
			var userObj = {
				users: results
			};
			res.render("index", userObj);
			// res.json(results);
			// console.log(results);
		});
	});

	// POST route
	router.post("/", function (res, req) {
		var user = req.body;
		db.User.create({
			nickname: user.nickname,
			awesomeness_level: user.awesomeness_level,
			age: user.age,
			class: user.class
		}).then(function(dbUser) {
			res.json(dbUser);
			console.log(dbUser);
		});
	});
	return router;
}