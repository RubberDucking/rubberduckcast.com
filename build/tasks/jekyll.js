module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.config('jekyll', {
        build: {
          options: {
              // defaults
          }
        },
        dev: {
            options: {
                serve: true,
                port: 4000,
                dest: '_site'
            }
        }
    });
};
