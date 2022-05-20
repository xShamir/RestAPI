const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    subscribers: {
        type: Number,
        required: true,
        default: 0
    },

    creationDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
}, {collection: "Channels"});

module.exports = mongoose.model("Channel", schema);