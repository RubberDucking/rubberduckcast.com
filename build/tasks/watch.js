module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config('watch', {
        scripts: {
            files: ['./styles/**/*.styl', './img/*.svg', './img/*.png', './js/*.js'],
            tasks: ['test', 'css', 'img', 'js'],
            options: {
                spawn:false
            }
        }
    });
};
