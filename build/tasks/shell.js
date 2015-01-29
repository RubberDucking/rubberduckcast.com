module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-shell');

    grunt.config('shell', {
        options: {
            stderr: false
        },
        dev: {
            command: 'jekyll serve'
        },
        build: {
          command: 'jekyll build'
        },
        push_prod_s3: {
            command: 'aws --profile rubberduck s3 cp _site/ s3://rubberduckcast.com --recursive --include \'*\' --acl \'public-read\''
        }
    });
};
