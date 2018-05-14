var chai = require("chai");
var expect = chai.expect();
var apiRoutes = require("../routes/api-routes");
var should = chai.should();
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("apiRoutes", function () {
	it("should GET data from the Fortnite Tracker API", function () {
		chai.request(apiRoutes)
			.get("/")
			.end((err, res) => {
				if (err) {
					console.log("Holy CRAP! An error: ", err);
				}
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(0);
				done();
			});
	});
});