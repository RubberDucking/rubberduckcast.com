module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.config('concurrent', {
        live_dev: {
            tasks: ['jekyll:dev', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });
};
