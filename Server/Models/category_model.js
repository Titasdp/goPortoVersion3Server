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
    createdAt: 'creation_date',
    updatedAt: 'updated_at',
    modelName: "category",
    tableName: "category",
});

module.exports = {
    Category
};