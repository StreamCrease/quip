/**
 * Created by Ayerhan on 3/30/2015.
 */
'use strict';

module.exports = function (orm, db) {

   var Computer= db.define('computer', {
        id: Number,
        name:String
    });
    Computer.hasOne('processor', db.models.processors ,{autoFetch:true});
    Computer.hasOne('memory', db.models.memory, {autoFetch:true});
    Computer.hasOne('motherboards', db.models.motherboards, {autoFetch:true});
    Computer.hasOne('storage', db.models.storage, {autoFetch:true});
};