const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");
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
    id_user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_identity: {
        type: DataTypes.STRING,
        allowNull: false,
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
    modelName: "comment",
    tableName: "comment",
});



sequelize
    .sync()
    .then()
    .catch(error => {
        console.log(error);
    });

module.exports = {
    Comment
};