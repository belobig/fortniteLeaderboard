
module.exports = function (app){

	// GET route
	router.get("/", (res, req)=> {
		
	});
	
	// POST route
	router.post("/", function (res, req) {
		var user = req.body;
		db.User.create({
			nickname: user.nickname,
			awesomeness_level: user.awesomeness_level,
			age: user.age,
			class: user.class
		}).then(function (dbUser) {
			res.json(dbUser);
			console.log(dbUser);
		});
	});
}

