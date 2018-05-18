
module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
		epicID: DataTypes.STRING,
		score: DataTypes.STRING,
		matches: DataTypes.INTEGER,
		wins: DataTypes.INTEGER,
		// winsRatio: DataTypes.STRING,
		kills: DataTypes.INTEGER,
		// killRank: DataTypes.INTEGER,
		// kdRatio: DataTypes.DECIMAL(2,2),
		// kdRank: DataTypes.INTEGER,
		// kpm: DataTypes.DECIMAL(2,2),
		// kpmRank: DataTypes.INTEGER,
		// scoreRank: DataTypes.INTEGER,
		// scorePerMatch: DataTypes.DECIMAL(2,2),
		// trnRating: DataTypes.INTEGER(4),
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
