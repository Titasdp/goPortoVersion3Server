const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class UserStatus extends Model {}

UserStatus.init({
    id_user_status: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    designation: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
}, {
    sequelize,
    timestamps: false,
    modelName: "user_status",
    tableName: "user_status",
});



sequelize
    .sync()
    .then()
    .catch(error => {
        console.log(error);
    });

module.exports = {
    UserStatus
};