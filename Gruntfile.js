module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            project: {
                expand: true,
                cwd: '.',
                src: ['**', '!Gruntfile.js', '!package.json', '!bower.json'],
                dest: 'dist'

            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};