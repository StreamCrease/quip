/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').controller('SelectController', ['$scope', function ($scope) {
        $scope.currentSlot = 1;
        $scope.motherboard = {
            slots: 4
        }
    }]);
})();