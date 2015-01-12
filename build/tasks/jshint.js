module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.config('jshint', {
    options: grunt.file.readJSON('.jshintrc'),

    src: [
      'Gruntfile.js',
      'js/**/*.js',
      'build/tasks/**/*.js'
    ]
  });
};
