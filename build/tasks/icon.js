module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-grunticon');

    grunt.config('grunticon', {
        icons: {
            files: [{
                expand: true,
                cwd: './img',
                src: ['*.svg', '*.png'],
                dest: './icons'
            }],
            options: {
            }
        }
    });
};
