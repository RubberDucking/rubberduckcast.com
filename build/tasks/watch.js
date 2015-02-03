module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config('watch', {
        scripts: {
            files: ['./styles/**/*.styl'],
            tasks: ['css'],
            options: {
                spawn:false
            }
        }
    });
};
