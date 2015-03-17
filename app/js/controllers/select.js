/* global angular, alert */
(function () {
    'use strict';

    angular.module('quipApp').controller('SelectController', ['$scope', function ($scope) {
        $scope.update = function () {
            alert(angular.toJson($scope.computerFormData));
        };
    }]);
})();