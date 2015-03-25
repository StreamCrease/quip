/* global angular, alert */
(function () {
    'use strict';

    angular.module('quipApp').controller('FormController', ['$scope', function ($scope) {
        $scope.computerFormData = {};

        $scope.submitComp = function () {
            alert(angular.toJson($scope.computerFormData));
        };
        // $scope.submitMem = function () {
        //     alert(angular.toJson($scope.memoryFormData));
        // };
    }]);
})();