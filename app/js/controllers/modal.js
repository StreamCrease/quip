/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').controller('ModalController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

        $scope.MEMORY_TYPES = {
            1: 'DDR',
            2: 'DDR2',
            3: 'DDR3'
        };

        $scope.open = function () {
            ngDialog.open({
                template: 'partials/modalAdd.html.tmpl',
                scope: $scope
            });
        };
    }]);

})();