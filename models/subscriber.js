const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    subscribedTo: {
        type: String,
        required: true
    },

    subscriptionDate: {
        type: String,
        required: true,
        default: Date.now()
    },
}, {collection: "Subscribers"});

module.exports = mongoose.model('Subscriber', schema);