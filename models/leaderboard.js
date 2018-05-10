
module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
		nickname: DataTypes.STRING,
		awesomeness_level: DataTypes.INTEGER,
		age: DataTypes.INTEGER,
		class: DataTypes.STRING
	});
	return User;
}
