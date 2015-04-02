'use strict';

module.exports = function (orm, db) {

    db.define('memory', {
        id: Number,
        type: Number,
        mSize: Number,
        rate: Number,
        used: Boolean
    });

};