const express = require("express");
const bodyParser = require("body-parser");
var db = require("./models");
var methodOverride = require('method-override');


var PORT = process.env.PORT || 8082;

var app = express();

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static("."));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());


// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./routes/api-routes.js", "./routes/html-routes");

app.use(routes);

db.sequelize.sync().then(function () {
	// Start our server so that it can begin listening to client requests.
	app.listen(PORT, function () {
		// Log (server-side) when our server has started
		console.log("Fraizer: I\'m listening: http://localhost:" + PORT);
	});
});

module.exports = app;