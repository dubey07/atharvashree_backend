const mongoose = require("mongoose");

const Enquiry = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    City: {
        type: String
    },
    Mobile: {
        type: Number
    },
    Requirement: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Enquiry", Enquiry);