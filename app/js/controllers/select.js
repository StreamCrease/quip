/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').controller('MemorySelectController', ['$scope', function ($scope) {
        $scope.$parent.computerFormData.memoriesID = [];

        $scope.motherboard = {
            slots: 2
        }

        $scope.removeMemory = function (array, index) {
            array.splice(index, 1);
        };

    }]);
})();