module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.config('stylus', {
    compile: {
      options: {
        paths: ['./styles']
      },
      files: {
        './dist/style.css': './styles/index.styl'
      }
    }
  });
};
