/* global module */
(function () {
    'use strict';

    module.exports = function (config) {
        config.set({

            basePath : '../',

            files : [
                'app/bower_components/angular/angular.js',
                'app/bower_components/angular-route/angular-route.js',
                'app/bower_components/angular-mocks/angular-mocks.js',
                'app/bower_components/ngDialog/js/ngDialog.js',
                'app/js/**/*.js',
                'test/unit/**/*.js'
            ],

            autoWatch : true,

            frameworks: ['jasmine'],

            browsers : ['Chrome'],

            plugins : [
                'karma-chrome-launcher',
                'karma-jasmine'
            ],

            junitReporter : {
                outputFile: 'test_out/unit.xml',
                suite: 'unit'
            }

        });
    };
})();