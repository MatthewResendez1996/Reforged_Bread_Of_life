const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    }
    })
module.exports = mongoose.model('Event', eventSchema)
