'use strict';
//Modules
var mongoose = require('mongoose');
//Schema
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name of the task.'
    },
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'completed'],
        default: 'pending'
    }
}, {versionKey: false});

module.exports = mongoose.model('Tasks', TaskSchema);
