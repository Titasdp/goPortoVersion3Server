const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class Itinerary extends Model {}

Itinerary.init({
    id_itinerary: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // id_user: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     defaultValue: ""
    // },
}, {
    sequelize,
    timestamps: true,
    createdAt: 'creation_date',
    updatedAt: 'updated_at',
    modelName: "itinerary",
    tableName: "itinerary",
});



sequelize
    .sync()
    .then()
    .catch(error => {
        console.log(error);
    });

module.exports = {
    Itinerary
};