const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class UserType extends Model {}

UserType.init({
    id_user_type: {
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
    modelName: "user_type",
    tableName: "user_type",
});

module.exports = {
    UserType
};