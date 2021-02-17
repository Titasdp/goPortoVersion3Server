const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class User extends Model {}

User.init({
    id_user: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    id_login_type: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    id_user_type: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    id_user_status: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "This is the field that we saved just for the refresh token."
    }
}, {
    sequelize,
    timestamps: true,
    createdAt: 'creationDate',
    updatedAt: 'updatedAt',
    modelName: "user",
    tableName: "user",
});



sequelize
    .sync()
    .then()
    .catch(error => {
        console.log(error);
    });

module.exports = {
    User
};