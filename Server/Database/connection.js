const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "nunops_goporto",
    "nunops_titas",
    "PVk5]#;iZZRu", {
        host: "nunops.com",
        port: "3306",
        dialect: "mysql",
        logging: false,
        define: {
            timestamps: false
        }
    }
);

module.exports = sequelize;