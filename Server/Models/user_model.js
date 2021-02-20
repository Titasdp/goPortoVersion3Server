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
        defaultValue
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "This is the field that we saved just for the refresh token."
    }
}, {
    sequelize,
    timestamps: true,
    createdAt: 'creation_date',
    updatedAt: 'updated_at',
    modelName: "user",
    tableName: "user",
});
// UserType Connection
userTypeModel.UserType.hasMany(User, {
    foreignKey: {
        name: "id_user_type",
        allowNull: false
    }
});
User.belongsTo(userTypeModel.UserType, {
    foreignKey: {
        name: "id_user_type",
        allowNull: false
    }
});
// Login type
loginTypeModel.LoginType.hasMany(User, {
    foreignKey: {
        name: "id_login_type",
        allowNull: false
    }
});
User.belongsTo(loginTypeModel.LoginType, {
    foreignKey: {
        name: "id_login_type",
        allowNull: false,
    }
});
// User Status type
userStatusModel.UserStatus.hasMany(User, {
    foreignKey: {
        name: "id_user_status",
        allowNull: false
    }
});
User.belongsTo(userStatusModel.UserStatus, {
    foreignKey: {
        name: "id_user_status",
        allowNull: false
    }
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