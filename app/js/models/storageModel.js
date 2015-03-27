'use strict';

module.exports = function (orm, db) {

    db.define('storage', {
        id: Number,
        type: Number,
        size: Number,
        used: Boolean
    });

};