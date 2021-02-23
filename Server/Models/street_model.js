const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class Street extends Model {}

Street.init({
    id_street: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false
    },

    postal_code: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    deleted: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 0
    },
}, {
    sequelize,
    timestamps: true,
    createdAt: 'creation_date',
    updatedAt: 'updated_at',
    modelName: "street",
    tableName: "street",
});

module.exports = {
    Street
};