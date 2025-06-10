const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        default: 0
    },
    workInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ]
}, {timestamps: true});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;