const mongoose = require('mongoose');

const RanchSchema = mongoose.Schema({
    fields: {
        type: Number,
        required: true

    },
    

    herds: {
        type: Number,
        required: true
    }

})


module.exports = mongoose.model('ranches', RanchSchema)