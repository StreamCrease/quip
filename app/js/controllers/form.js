/* global angular, alert */
(function () {
    'use strict';

    angular.module('quipApp').controller('FormController', ['$scope', function ($scope) {
        var models = require('./js/models/');
        $scope.submitComp = function () {
            alert(angular.toJson($scope.computerFormData));
        };
        // $scope.submitMem = function () {
        //     alert(angular.toJson($scope.memoryFormData));
        // };
        $scope.submitMother = function () {
            var Data = {
                manufacturer: $scope.motherFormData.manufact,
                memoryType: $scope.motherFormData.memtype,
                memorySlots: $scope.motherFormData.slots,
                used: $scope.motherFormData.used
            };
            models(function (err, db) {
                db.models.motherboards.create(Data, function (err) {
                    if (err) {
                        throw err;
                    } else {
                        $scope.$parent.update();
                    }
                })
            });

        };
        $scope.submitMem = function () {
            var Data = {
                manufacturer: $scope.memoryFormData.manufact,
                type: $scope.memoryFormData.memtype,
                mSize: $scope.memoryFormData.size,
                rate: $scope.memoryFormData.rates,
                used: $scope.memoryFormData.used
            };
            models(function (err, db) {
                db.models.memory.create(Data, function (err) {
                    if (err) {
                        throw err;
                    } else {
                        $scope.$parent.update();
                    }

                })
            });

        };

        $scope.submitStorage = function () {
            var Data = {
                type: $scope.storageFormData.strtype,
                size: $scope.storageFormData.size,
                used: $scope.storageFormData.used
            };
            models(function (err, db) {
                db.models.storage.create(Data, function (err) {
                    if (err) {
                        throw err;
                    } else {
                        $scope.$parent.update();
                    }
                })
            })
        };

        $scope.submitProc = function () {
            var Data = {
                manufacturer: $scope.procFormData.manufact,
                frequency: $scope.procFormData.freq,
                cores: $scope.procFormData.cores,
                name: $scope.procFormData.name,
                used: $scope.procFormData.used
            };
            models(function (err, db) {
                db.models.processors.create(Data, function (err) {
                    if (err) {
                        throw err;
                    } else {
                        $scope.$parent.update();
                    }
                })
            })
        }

    }]);
})();