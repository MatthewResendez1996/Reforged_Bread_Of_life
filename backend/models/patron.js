const mongoose = require('mongoose')

const patronSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    phoneNumber: {
        type: String,
        required: true
    },
    referral: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    wantVaccine: {
        type: String,
        required: true

    },
    vaccinePreference: {
        type: String,
        required: false
    },
    vaccineStatus: {
        type: String,
        required: true,
        default: 'YES'
    },
    additionalService: {
        type: String,
        required: true

    },
    numberChildren: {
        type: String,
        required: true
    },
    seniorStatus: {
        type: String,
        required: true

    },
    vetranStatus: {
        type: String,
        required: true
    },
    ethnicity:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Patron', patronSchema)
