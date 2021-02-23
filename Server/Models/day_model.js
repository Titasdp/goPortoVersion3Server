const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class Day extends Model {}

Day.init({
    id_day: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
}, {
    sequelize,
    timestamps: false,
    modelName: "day",
    tableName: "day",
});



module.exports = {
    Day
};