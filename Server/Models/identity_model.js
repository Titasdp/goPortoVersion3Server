const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class Identity extends Model {}

Identity.init({
    id_identity: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    information: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    lng: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    shuted_down: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 0,
    },
    deleted: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize,
    timestamps: true,
    createdAt: 'creation_date',
    updatedAt: 'updated_at',
    modelName: "identity",
    tableName: "identity",
});



sequelize
    .sync()
    .then()
    .catch(error => {
        console.log(error);
    });

module.exports = {
    Identity
};