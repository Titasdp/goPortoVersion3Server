const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class LoginType extends Model {}

LoginType.init({
    id_login_type: {
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
    modelName: "login_type",
    tableName: "login_type",
});

module.exports = {
    LoginType
};