(function () {
    'use strict';

    angular.module('quipApp').controller('ModalController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

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
        $scope.openComputerModal = function () {
            ngDialog.open({
                template: 'partials/modals/computerModal.html.tmpl',
                scope: $scope
            });
        };
    }]);
})();