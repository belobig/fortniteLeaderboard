
module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
		epicID: DataTypes.STRING,
		kills: DataTypes.INTEGER,
		killRank: DataTypes.INTEGER,
		kdRatio: DataTypes.DECIMAL(2,2),
		kdRank: DataTypes.INTEGER,
		kpm: DataTypes.DECIMAL(2,2),
		kpmRank: DataTypes.INTEGER,
		matches: DataTypes.INTEGER,
		score: DataTypes.INTEGER,
		scoreRank: DataTypes.INTEGER,
		scorePerMatch: DataTypes.DECIMAL(10,2),
		trnRating: DataTypes.INTEGER,
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: null
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: null
		},
	});
	return User;
}
