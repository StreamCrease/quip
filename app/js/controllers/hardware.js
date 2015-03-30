(function () {
    'use strict';

    angular.module('quipApp').controller('HardwareController', ['$scope', function ($scope) {
        $scope.pageClass = 'hardwear-container';
        $scope.tab = 0;

        $scope.changeTab = function (newTab) {
            $scope.tab = newTab;
        };

        $scope.isActiveTab = function (curTab) {
            return $scope.tab === curTab;
        };

        $scope.MEMORY_TYPES = {
            1: 'DDR',
            2: 'DDR2',
            3: 'DDR3'
        };

        $scope.STORAGE_TYPES = {
            1: 'HDD',
            2: 'SSD'
        };

        $scope.motherboards = [
            { id: 1, manufacturer: 'Asus', memoryType: 2, memorySlots: 2, used: true }
        ];

        // #{frequency} GHz ${manufacturer} ${name}
        $scope.processors = [
            { id: 1, manufacturer: 'Intel', frequency: 2.5, cores: 4, name: 'Core i5',   used: true },
            { id: 2, manufacturer: 'Intel', frequency: 1.3, cores: 1, name: 'Atom E6x0', used: true },
            { id: 3, manufacturer: 'Intel', frequency: 1.5, cores: 2, name: 'Atom N400', used: true },
            { id: 4, manufacturer: 'Intel', frequency: 2.5, cores: 4, name: 'Core i5',   used: true },
            { id: 5, manufacturer: 'Intel', frequency: 2.5, cores: 4, name: 'Core i5',   used: true }
        ];

        // #{mSize} GB ${rate} MHz ${MEMORY_TYPES[type]}
        $scope.memory = [
            { id: 1, type: 3, mSize: 8,  rate: 1600, used: true },
            { id: 2, type: 3, mSize: 3,  rate: 800,  used: true },
            { id: 3, type: 3, mSize: 6,  rate: 1600, used: true },
            { id: 4, type: 3, mSize: 1,  rate: 1600, used: true },
            { id: 5, type: 3, mSize: 16, rate: 1600, used: true }
        ];

        // #{size} GB ${STORAGE_TYPES[type]}
        $scope.storage = [
            { id: 1, type: 1, size: 500,  used: true },
            { id: 2, type: 1, size: 1000, used: true },
            { id: 3, type: 2, size: 256,  used: true },
            { id: 4, type: 1, size: 256,  used: true },
            { id: 5, type: 2, size: 500,  used: true }
        ];

    }]);
})();
