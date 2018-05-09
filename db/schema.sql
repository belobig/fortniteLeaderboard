DROP DATABASE IF EXISTS leaderboardTest_db;

CREATE DATABASE leaderboardTest_db;

USE leaderboardTest_db;

CREATE TABLE users (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	nickname VARCHAR(100) NOT NULL,
	awesomeness_level INT (3) NOT NULL,
	age INT (2) NOT NULL,
	class VARCHAR(50) NOT NULL
);
