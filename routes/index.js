var express = require("express");
// const redis = require('../config/redis')

const userController = require("../controllers/usersController");

const usersRouter = require("./users");
const itemsRouter = require("./items");
var router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const users = await userController.getUsers();
		return res.render("index", { users });
	} catch (err) {
		console.log(err);
	}
});

// ********
// When auth added store session
// router.get("/redis", async (req, res, next) => {
// 	await redis.set("key", "value");
// 	const value = await redis.get("key");

// 	console.log(value);
// });
// ********


router.use("/users", usersRouter);
router.use("/items", itemsRouter);

module.exports = router;
