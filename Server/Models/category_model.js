const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class Category extends Model {}

Category.init({
    id_category: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    deleted: {
        type: DataTypes.INTEGER(1),
        defaultValue: 0,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    createdAt: 'creationDate',
    updatedAt: 'updatedAt',
    modelName: "category",
    tableName: "category",
});



sequelize
    .sync()
    .then()
    .catch(error => {
        console.log(error);
    });

module.exports = {
    Category
};