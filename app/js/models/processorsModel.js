'use strict';
module.exports = function (orm, db) {

    db.define('processors', {
        id: Number,
        manufacturer: String,
        frequency: Number,
        cores: Number,
        name: String,
        used: Boolean
    });

};