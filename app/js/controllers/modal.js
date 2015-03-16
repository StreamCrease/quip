/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').controller('ModalController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

        $scope.MEMORY_TYPES = {
            1: 'DDR',
            2: 'DDR2',
            3: 'DDR3'
        };
        $scope.STORAGE_TYPES = {
            1: 'HDD',
            2: 'SSD'
        };

        $scope.openMotherModal = function () {
            ngDialog.open({
                template: 'partials/modals/motherModal.html.tmpl',
                scope: $scope
            });
        };
        $scope.openProcModal = function () {
            ngDialog.open({
                template: 'partials/modals/procModal.html.tmpl',
                scope: $scope
            });
        };
        $scope.openMemoryModal = function () {
            ngDialog.open({
                template: 'partials/modals/memoryModal.html.tmpl',
                scope: $scope
            });
        };
        $scope.openStorageModal = function () {
            ngDialog.open({
                template: 'partials/modals/storageModal.html.tmpl',
                scope: $scope
            });
        };
    }]);

})();