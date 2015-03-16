/* global angular */
(function () {
    'use strict';

    var quipApp = angular.module('quipApp', [
        'ngRoute'
    ]);

    quipApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/computers', {
                templateUrl: 'partials/computers.html',
                controller: 'ComputersController'
            }).when('/hardware', {
                templateUrl: 'partials/hardware.html',
                controller: 'HardwareController'
            }).otherwise({
                redirectTo: '/computers'
            })
    }]);
})();