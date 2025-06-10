const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    speciallization: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Hospital = mongoose.model('Hospital', hospitalSchema);
module.exports = Hospital;