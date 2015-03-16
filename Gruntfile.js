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
            files: ['Gruntfile.js', 'app/js/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            options: {
                livereload: true
            },
            tasks: ['jscs', 'jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'jscs', 'watch']);

};