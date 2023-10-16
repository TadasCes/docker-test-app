const { validationResult } = require("express-validator");
const database = require("../config/db");

const initDatabase = (req, res) => {
	const sqlQuery =
		"CREATE TABLE IF NOT EXISTS users(name VARCHAR(50), age integer)";

	database.query(sqlQuery, (err) => {
		if (err) throw err;

		res.send("Table created!");
	});
};

const getUsers = async (req, res) => {
	try {
		const users = await database.query("SELECT * FROM users");
		return users.rows;
	} catch (err) {
		console.log(err);
	}
};

const addUser = (req, res) => {
	console.log(req.body);
	const name = req.body.name.trim();
	const age = req.body.age.trim();

	if (!name || !age) {
		console.log("Please enter all data!");
		res.send("Please enter all data!");
		return res.redirect("/");
	}
	try {

		const user = {
			name: req.body.name,
			age: req.body.age,
		};
		const sqlQuery = `INSERT INTO users (name, age) VALUES ('${user.name}', ${user.age})`;
		
		database.query(sqlQuery, (err, row) => {
			if (err) throw err;
			
			
			return row;
		});

	} catch (err) {
		return []
	}
};

module.exports = {
	initDatabase,
	getUsers,
	addUser,
};
