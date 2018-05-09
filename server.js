const express = require("express");
const bodyParser = require("body-parser");
var db = require("./models");


var PORT = process.env.PORT || 8082;

var app = express();

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(express.static('.'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./routes/api-routes.js");

app.use("/", routes);

db.sequelize.sync().then(function () {
	// Start our server so that it can begin listening to client requests.
	app.listen(PORT, function () {
		// Log (server-side) when our server has started
		console.log("I am listening on: http://localhost:" + PORT);
	});
});

