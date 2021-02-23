const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../Database/connection");

const itineraryModel = require("../Models/itinerary_model");
const identityModel = require("../Models/identity_model");

class ItineraryIdentity extends Model {}

ItineraryIdentity.init({}, {
    sequelize,
    timestamps: false,
    modelName: "itinerary_identity",
    tableName: "itinerary_identity"
});

itineraryModel.Itinerary.belongsToMany(identityModel.Identity, {
    through: ItineraryIdentity,
    foreignKey: "id_itinerary"
});
identityModel.Identity.belongsToMany(itineraryModel.Itinerary, {
    through: ItineraryIdentity,
    foreignKey: "id_identity"
});


module.exports = {
    ItineraryIdentity
};