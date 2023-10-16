const express = require("express");
const userController = require("../../controllers/usersController");

const router = express.Router();

router.get("/init", userController.initDatabase);

router.get("/", userController.getUsers);
//test7

router.post("/", async (req, res) => {
	try {
		const result = await userController.addUser(req);
		return res.redirect("/");
	} catch (err) {
		console.log(err);
		return res.redirect("/");
	}
});

module.exports = router;
