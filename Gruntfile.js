/* global module */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jscs: {
            files: ['Gruntfile.js', 'app/js/**/*.js', 'test/**/*.js'],
            options: {
                jscs: '.jscsrc'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            core: {
                src: ['Gruntfile.js', 'app/js/**/*.js']
            },
            test: {
                src: 'test/**/*.js',
                options: {
                    jshintrc: 'test/.jshintrc'
                }
            }
        },
        csslint: {
            files: ['app/css/*.css']
        },
        htmlangular: {
            options: {
                customattrs: ['memory-input'],
                // wrap templates as complite HTML pages
                tmplext: 'html.tmpl',
                reportpath: 'log/html-angular-validate-report.json'
            },
            files: {
                src: ['app/index.html', 'app/partials/**/*.html.tmpl']
            }
        },
        watch: {
            files: ['app/js/**/*.js', 'app/index.html', 'app/partials/**/*.html.tmpl', 'app/css/*.css'],
            options: {
                livereload: true
            }
            // tasks: ['newer:jshint', 'newer:csslint', 'newer:htmlangular']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-html-angular-validate');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['jshint', 'csslint', 'htmlangular', 'watch']);

};