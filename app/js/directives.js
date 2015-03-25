/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').directive('memoryInput', [function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                scope.$watch('memory', function (value) {
                    if (!!value && scope.computerFormData.memoriesID.length === scope.motherboard.slots - 1) {
                        document.querySelector('#comp-proc').focus();
                    }

                    if (scope.computerFormData.memoriesID.length === scope.motherboard.slots) {
                        return;
                    }

                    if (!!value) {
                        scope.computerFormData.memoriesID.push(value)
                        scope.memory = null;
                    }
                });

            }
        }
    }]);

})();