const mongoose = require('mongoose');

const HerdSchema = mongoose.Schema({
    cattle: {
        type: Number,
        required: true

    },
    males: {
        type: Number,
        required: true

    },
    females: {
        type: Number,
        required: true
    }

})


module.exports = mongoose.model('herds', HerdSchema)