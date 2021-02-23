const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class Locality extends Model {}

Locality.init({
    id_locality: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    designation: {
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
    modelName: "itinerary",
    tableName: "itinerary",
});

module.exports = {
    Locality
};