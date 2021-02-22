const express = require("express");
const router = express.Router(); // router
const userControllers = require("../Controllers/user_controller");



router.get("/users", (req, res) => {
    userControllers.getAllUsers(req, res);
});

module.exports = router;