// Model for saving user and stats to DB
module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
		epicID: DataTypes.STRING,
		score: DataTypes.STRING,
		matches: DataTypes.INTEGER,
		wins: DataTypes.INTEGER,
		kills: DataTypes.INTEGER,
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: null
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: null
		}
	});
	return User;
}
