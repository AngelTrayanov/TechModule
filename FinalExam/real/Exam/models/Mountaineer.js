const mongoose = require('mongoose');

const mountaineerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 1
    },
    gender: {
        type: String,
        required: true
    },
    lastSeenDate: {
        type: String,
        required: true
    }
});

const Mountaineer = mongoose.model('Mountaineer', mountaineerSchema);
module.exports = Mountaineer;