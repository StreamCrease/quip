(function () {
    'use strict';

    angular.module('quipApp').controller('MemorySelectController', ['$scope', function ($scope) {
        $scope.$parent.computerFormData = {};
        $scope.$parent.computerFormData.memories = [];
        $scope.slotID = 0;

        $scope.motherboard = {
            slots: 4
        }

        $scope.MEMORY_TYPES = [
            { id: 1, name: 'DDR' },
            { id: 2, name: 'DDR2'},
            { id: 3, name: 'DDR3'}
        ];

        $scope.removeMemory = function (array, index) {

            array.splice(index, 1);
        };

    }]);
})();