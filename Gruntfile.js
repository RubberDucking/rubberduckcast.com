module.exports = function(grunt) {
  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // load tasks.
  grunt.loadTasks('build/tasks');

  grunt.registerTask('test', [
    'jshint',
    'jscs'
  ]);

  grunt.registerTask('css', [
    'stylus'
  ]);

  grunt.registerTask('dev', [
    'default',
    'concurrent:live_dev'
  ]);

  grunt.registerTask('default', [
    'test',
    'css',
    'jekyll:build'
  ]);

  // Task to push code to S3
  grunt.registerTask('deploy-to-prod', [
    'default',
    'shell:push_prod_s3'
  ]);

  grunt.registerTask('push-episodes', [
    'shell:push_episodes'
  ]);

  grunt.registerTask('gen-stats', [
    'shell:download_report'
  ]);

  grunt.registerTask('oggify', [
    'ffmpeg'
  ]);

};
