module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config('watch', {
        scripts: {
            files: ['./styles/**/*.styl', './_includes/*.*', './_layouts/*.*', './*.html'],
            tasks: ['css', 'jekyll:build'],
            options: {
                spawn:true
            }
        }
    });
};
