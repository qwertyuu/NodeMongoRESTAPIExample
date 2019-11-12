'use strict';
//Modules
var mongoose = require('mongoose');
//Schema
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
    title: {
        type: String,
        required: 'Please enter the title of the album.'
    },
    artists: {
        type: [String],
        default: [],
    },
    released: {
        type: Date
    },
    style: {
        type: String
    }
}, {versionKey: false});

module.exports = mongoose.model('Albums', AlbumSchema);
