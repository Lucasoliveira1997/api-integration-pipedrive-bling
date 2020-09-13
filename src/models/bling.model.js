'use strict'

const mongoose = require('mongoose')

const blingModel = new mongoose.Schema({

    pipedriveId: {type: String},
    company: {type: String, required: true},
    value: {type: Number, required: true, min: 0},
    add_time: {type: Date, required: true},
    update_time: {type: Date, required: true}

})

module.exports = mongoose.model('blingModel', blingModel)