const { Client } = require("pg")

require("dotenv").config();

const client = new Client({
	user: process.env.POSTGRES_USERNAME,
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DB,
	password: process.env.POSTGRES_PASSWORD,
	port: process.env.POSTGRES_PORT
})


client.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
  });
 


module.exports = client;
