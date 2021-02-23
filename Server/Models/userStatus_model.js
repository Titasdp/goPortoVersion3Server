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




module.exports = {
    UserStatus
};