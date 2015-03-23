/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').controller('ModalController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

        $scope.MEMORY_TYPES = [
            { id: 1, name: 'DDR' },
            { id: 2, name: 'DDR2'},
            { id: 3, name: 'DDR3'}
        ];
        $scope.STORAGE_TYPES = [
            { id: 1, name: 'HDD' },
            { id: 2, name: 'SSD'}
        ];

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
                trapFocus: true,
                preserveFocus: true,
                ariaAuto: true,
                scope: $scope
            });
        };
        $scope.openStorageModal = function () {
            ngDialog.open({
                template: 'partials/modals/storageModal.html.tmpl',
                scope: $scope
            });
        };
        $scope.openComputerModal = function () {
            ngDialog.open({
                template: 'partials/modals/computerModal.html.tmpl',
                scope: $scope
            });
        };
    }]);
})();