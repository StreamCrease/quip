(function () {
    'use strict';

    angular.module('quipApp').controller('MemorySelectController', ['$scope', function ($scope) {
        $scope.$parent.computerFormData = {};
        $scope.$parent.computerFormData.memories = [];
        $scope.slotID = 0;

        var models = require('./js/models/');

        models(function (err, db) {
            var memories = db.models.memory;
            memories.find({}, function (err, data) {

            })
        })
        $scope.removeMemory = function (array, index) {
            array.splice(index, 1);
        };

    }]);
})();