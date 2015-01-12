module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jscs');

  grunt.config('jscs', {
    options: {
      config: '.jscs.json'
    },
    src: [
      'Gruntfile.js',
      'js/**/*.js',
      'build/tasks/**/*.js'
    ]
  });
};
