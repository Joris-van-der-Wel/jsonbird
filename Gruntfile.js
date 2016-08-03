'use strict';

/*eslint-env node*/

module.exports = function(grunt) {
    grunt.initConfig({
        eslint: {
            options: {
                configFile: '.eslintrc.json',
            },
            src: ['Gruntfile.js', 'lib/**/*.js'],
        },
        jscs: {
            options: {
                config: '.jscsrc',
            },
            src: ['Gruntfile.js', 'lib/**/*.js'],
        },
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', [
        'jscs',
        'eslint',
    ]);

    grunt.registerTask('lint', [
        'jscs',
        'eslint',
    ]);
};
