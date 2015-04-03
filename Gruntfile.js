module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    livereload: true
                }
            }
        },
        jscs: {
            files: ['Gruntfile.js', 'app/js/**/*.js', 'test/**/*.js'],
            options: {
                config: '.jscsrc'
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
        htmlangular: {
            options: {
                customattrs: ['memory-input', 'sortable', 'by', 'order', 'reverse', 'fixed-table-headers'],
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
        },
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            prod: {
                NODE_ENV: 'production'
            }
        },
        clean: {
            before: ['prod/'],
            afterMinify: ['prod/js/*.js', 'prod/css/*.css', '!prod/css/*.min.css', '!prod/js/*.min.js']
        },
        preprocess: {
            dev: {
                src: 'app/initial.html',
                dest: 'app/index.html'
            },
            prod: {
                src: 'app/initial.html',
                dest: 'prod/index.html'
            }
        },
        copy: {
            fonts: {
                cwd: 'app/bower_components/bootstrap/dist/',
                src: 'fonts/*',
                dest: 'prod/',
                expand: true
            },
            partials: {
                cwd: 'app/',
                src: 'partials/**/*',
                dest: 'prod/',
                expand: true
            },
            packagejson: {
                cwd: 'app/',
                src: 'package.json',
                dest: 'prod/',
                expand: true
            },
            node_modules: {
                cwd: 'app/',
                src: 'node_modules/**/*',
                dest: 'prod/',
                expand: true
            }
        },
        concat: {
            js: {
                src: [
                    'app/bower_components/jquery/dist/jquery.min.js',
                    'app/bower_components/angular/angular.min.js',
                    'app/bower_components/angular-route/angular-route.min.js',
                    'app/bower_components/angular-animate/angular-animate.min.js',
                    'app/bower_components/ngDialog/js/ngDialog.min.js',
                    'app/bower_components/StickyTableHeaders/js/jquery.stickytableheaders.min.js',
                    'app/js/**/*.js'
                ],
                dest: 'prod/js/quip.js'
            },
            css: {
                src: [
                    'app/bower_components/bootstrap/dist/css/bootstrap.css',
                    'app/bower_components/ngDialog/css/ngDialog.css',
                    'app/bower_components/ngDialog/css/ngDialog-theme-default.css',
                    'app/css/styles.css'
                ],
                dest: 'prod/css/styles.css'
            }
        },
        uglify: {
            js: {
                src: 'prod/js/quip.js',
                dest: 'prod/js/quip.min.js'
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                advanced: false
            },
            css: {
                src: 'prod/css/styles.css',
                dest: 'prod/css/styles.min.css'
            }
        },
        nodewebkit: {
            options: {
                platforms: ['win', 'osx', 'linux'],
                buildDir: './webkitbuilds'
            },
            src: ['./prod/**/*']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-html-angular-validate');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('default', ['jscs', 'jshint', 'env:dev', 'htmlangular', 'preprocess:dev', 'connect:server', 'watch']);
    grunt.registerTask('build', ['jscs', 'jshint', 'env:prod', 'clean:before', 'copy', 'concat', 'uglify', 'cssmin', 'clean:afterMinify', 'preprocess:prod', 'nodewebkit']);

};