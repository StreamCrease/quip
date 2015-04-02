'use strict';

module.exports = function (orm, db) {
    db.define('motherboards', {
        id: Number,
        manufacturer: String,
        memoryType: Number,
        memorySlots: Number,
        used: Boolean
    });
};