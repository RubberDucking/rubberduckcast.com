module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.config('requirejs', {
    compile: {
      options: {
        name: 'main',
        baseUrl: './js/',
        mainConfigFile: './js/main.js',
        paths: {
          requireLib: '../node_modules/requirejs/require'
        },
        include: ['requireLib'],
        out: 'dist/optimized.js'
      }
    }
  });
};
