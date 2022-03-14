// Iteration #1

const {model, Schema} = require("mongoose");

const dronesSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
} )

const droneModel = model("drone", dronesSchema);

module.exports = droneModel;
