module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config('watch', {
        scripts: {
            files: ['./styles/**/*.styl', './js/*.js'],
            tasks: ['default'],
            options: {
                spawn:false
            }
        }
    });
};
