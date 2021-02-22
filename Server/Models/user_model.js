const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
class User extends Model {}


const userTypeModel = require("../Models/userType_model");
const loginTypeModel = require("../Models/loginType_model");
const userStatusModel = require("../Models/userStatus_model");

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
        allowNull: true,
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: ""
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "This is the field that we saved just for the refresh token."
    },
    id_user_type: {
        type: DataTypes.STRING,
        references: {
            model: userTypeModel.UserType, // company migration define
            key: 'id_user_type'
        }
    }
}, {
    sequelize,
    timestamps: true,
    createdAt: 'creation_date',
    updatedAt: 'updated_at',
    modelName: "user",
    tableName: "user",
    logging: false,
});
// UserType Connection
// userTypeModel.UserType.hasMany(User, {
//     foreignKey: {
//         name: "id_user_type",
//         allowNull: false,
//         type: DataTypes.STRING,
//     }
// });
// User.belongsTo(userTypeModel.UserType, {
//     foreignKey: {
//         name: "id_user_type",
//         allowNull: false,
//         type: DataTypes.STRING,
//     }
// });
// // Login type
// loginTypeModel.LoginType.hasMany(User, {
//     foreignKey: {
//         name: "id_login_type",
//         allowNull: false,
//         type: DataTypes.STRING,
//     }
// });
// User.belongsTo(loginTypeModel.LoginType, {
//     foreignKey: {
//         name: "id_login_type",
//         allowNull: false,
//         type: DataTypes.STRING,
//     }
// });
// // User Status type
// userStatusModel.UserStatus.hasMany(User, {
//     foreignKey: {
//         name: "id_user_status",
//         allowNull: false,
//         type: DataTypes.STRING,
//     }
// });
// User.belongsTo(userStatusModel.UserStatus, {
//     foreignKey: {
//         name: "id_user_status",
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });



sequelize
    .sync()
    .then()
    .catch(error => {
        console.log("Tiago li")
        console.log(error);
    });

module.exports = {
    User
};