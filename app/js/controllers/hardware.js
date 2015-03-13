/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').controller('HardwareController', ['$scope', function ($scope) {

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

        $scope.motherboards = [
            { id: 1, manufacturer: '', memoryType: 2, memorySlots: 2, used: true }
        ];

        $scope.processors = [
            { id: 1, manufacturer: 'Intel', frequency: 2.5, cores: 4, name: 'Core i5',   used: true },
            { id: 2, manufacturer: 'Intel', frequency: 1.3, cores: 1, name: 'Atom E6x0', used: true },
            { id: 3, manufacturer: 'Intel', frequency: 1.5, cores: 2, name: 'Atom N400', used: true },
            { id: 4, manufacturer: 'Intel', frequency: 2.5, cores: 4, name: 'Core i5',   used: true },
            { id: 5, manufacturer: 'Intel', frequency: 2.5, cores: 4, name: 'Core i5',   used: true }
        ];

        $scope.memory = [
            { id: 1, type: 'DDR3', mSize: 8,  rate: 1600, used: true },
            { id: 2, type: 'DDR3', mSize: 3,  rate: 800,  used: true },
            { id: 3, type: 'DDR3', mSize: 6,  rate: 1600, used: true },
            { id: 4, type: 'DDR3', mSize: 1,  rate: 1600, used: true },
            { id: 5, type: 'DDR3', mSize: 16, rate: 1600, used: true }
        ];

        $scope.storage = [

        ];

        $scope.graphics = [
            { id: 1, manufacturer: 'Intel',  name: 'HD Graphics', mSize: 1024, rate: 4000, used: true },
            { id: 2, manufacturer: 'Nvidia', name: 'G-Force',     mSize: 1024, rate: 4000, used: true },
            { id: 3, manufacturer: 'Intel',  name: 'HD Graphics', mSize: 1024, rate: 4000, used: true },
            { id: 4, manufacturer: 'ATI',    name: 'Radeon',      mSize: 2056, rate: 4000, used: true },
            { id: 5, manufacturer: 'Intel',  name: 'HD Graphics', mSize: 5024, rate: 4000, used: true }
        ];

        /*
         * Types:
         * 1 - Processor
         * 2 - Memory
         * 3 - Graphics
         */
        $scope.hardware = [
            { id: 1,  type: 1, name: '2.5 GHz Intel Core i5', used: true },
            { id: 2,  type: 1, name: '1.3 GHz Atom E6x0',     used: true },
            { id: 3,  type: 1, name: '1.5 GHz Atom N400',     used: true },
            { id: 4,  type: 1, name: '2.5 GHz Intel Core i5', used: true },
            { id: 5,  type: 1, name: '2.5 GHz Intel Core i5', used: true },
            { id: 6,  type: 2, name: '8 GB 1600 MHz DDR3',    used: true },
            { id: 7,  type: 2, name: '3 GB 800 MHz DDR3',     used: true },
            { id: 8,  type: 2, name: '6 GB 1600 MHz DDR3',    used: true },
            { id: 9,  type: 2, name: '1 GB 1600 MHz DDR2',    used: true },
            { id: 10, type: 2, name: '16 GB 1600 MHz DDR3',   used: true },
            { id: 11, type: 3, name: 'Intel HD Graphics 4000 1024 MB', used: true },
            { id: 12, type: 3, name: 'Nvidia G-Force',        used: true },
            { id: 13, type: 3, name: 'Intel HD Graphics 4000 1024 MB', used: true },
            { id: 13, type: 3, name: 'ATI Radeon 2056 MB',    used: true },
            { id: 13, type: 3, name: 'Intel HD Graphics 4000 5024 MB', used: true }
        ];

    }]);
})();