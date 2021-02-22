const userModel = require("../Models/user_model")
getAllUsers = (req, res) => {
    sequelize
        .query("SELECT * FROM user", {
            model: userModel.User
        })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(error => {
            res.status(400).send("Something went wrong please try again later");
        });
};