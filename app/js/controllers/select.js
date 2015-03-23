/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').controller('MemorySelectController', ['$scope', function ($scope) {
        $scope.memories = [];

        $scope.currentSlot = 1;
        $scope.motherboard = {
            slots: 4
        }

        $scope.$watch('memory', function (value) {
            if (!!value) {
                $scope.memories.push(value)
                $scope.memory = null;
            }
        });

        $scope.removeMemory = function (index) {
            console.log(index);
            $scope.memories.splice(index, 1);
            console.log($scope.memories);
        };

    }]);
})();