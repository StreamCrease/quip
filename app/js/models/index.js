(function () {
    'use strict';

    var orm = require('orm');
    var connection = null;

    function setup (db, cb) {

        require('./storageModel')(orm, db);
        require('./memoryModel')(orm, db);
        require('./motherboardsModel')(orm, db);
        require('./processorsModel')(orm, db);

        return cb(null, db);
    }

    module.exports = function (cb) {
        if (connection) {
            return cb(null, connection);
        }

        orm.connect('sqlite://mydb.sqlite3', function (err, db) {
            if (err) { return cb(err); }

            connection = db;

            db.settings.set('instance.returnAllErrors', true);

            return setup(db, cb);
        });
    };
})();