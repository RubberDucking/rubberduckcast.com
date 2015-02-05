module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ffmpeg');

    grunt.config('ffmpeg', {
        audio: {
            options: {
                audioBitrate: '64k',
                FFmpegOptions: {
                    withAudioCodec: 'libvorbis',
                    withNoVideo: true
                },
                onError: function(error, input) {
                    console.log('error on: ' + input + ' [' + error + ']');
                }
            },
            files: [{
                expand: true,
                cwd: './_audio',
                src: ['*.m4a'],
                filter: function(filepath) {
                    // only do the conversion if the ogg file doesn't already exist
                    return !grunt.file.isFile(filepath.slice(0, -3) + 'ogg');
                },
                dest: './_audio',
                ext: '.ogg'
            }]
        }
    });
};
