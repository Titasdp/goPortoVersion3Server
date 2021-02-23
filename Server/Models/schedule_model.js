const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class Schedule extends Model {}

Schedule.init({
    open_time: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    close_time: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    full_close: {
        type: DataTypes.INTEGER(1),
        defaultValue: 0,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    modelName: "schedule",
    tableName: "schedule",
});

module.exports = {
    Schedule
};