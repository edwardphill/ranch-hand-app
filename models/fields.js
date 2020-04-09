const mongoose = require('mongoose');

const FieldSchema = mongoose.Schema({
    fence: {
        type: String,
        required: true
    },
    draggedDate: {
        type: Date,
        required: true

    },
    daysGrazed: {
        type: Number,
        required: true

    },
    acreage: {
        type: Number,
        required: true

    },
    lyme: {
        type: Date,
        required: true

    },
    fertilized: {
        type: Date,
        required: true

    },
    hayed: {
        type: Date,
        required: true

    },
    bales: {
        type: Number,
        required: true

    },
    herd: {
        type: String,
        

    }


})





module.exports = mongoose.model('fields', FieldSchema)