const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
const userModel = require("../Models/user_model")
const identityModel = require("../Models/identity_model")
class Comment extends Model {}

Comment.init({
    id_comment: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // id_user: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // id_identity: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
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
    modelName: "comment",
    tableName: "comment",
});
//User connection
userModel.User.hasMany(Comment, {
    foreignKey: {
        name: "id_user",
        allowNull: false,
    }
});
Comment.belongsTo(userModel.User, {
    foreignKey: {
        name: "id_user",
        allowNull: false,
    }
});
// Identity connection
identityModel.Identity.hasMany(Comment, {
    foreignKey: {
        name: "id_user",
        allowNull: false,
    }
});
Comment.belongsTo(identityModel.Identity, {
    foreignKey: {
        name: "id_user",
        allowNull: false,
    }
});
module.exports = {
    Comment
};