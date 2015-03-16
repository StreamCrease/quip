/* global angular */
(function () {
    'use strict';

    var quipApp = angular.module('quipApp', [
        'ngRoute',
        'ngDialog'
    ]);

    quipApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/computers', {
                templateUrl: 'partials/computers.html.tmpl',
                controller: 'ComputersController'
            }).when('/hardware', {
                templateUrl: 'partials/hardware.html.tmpl',
                controller: 'HardwareController'
            }).otherwise({
                redirectTo: '/computers'
            })
    }]);
})();