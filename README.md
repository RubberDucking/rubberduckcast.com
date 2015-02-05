# Rubber Duck Cast

Working on this repo requires [Ruby](https://www.ruby-lang.org/en/documentation/installation/), [Bundler](http://bundler.io/), [nodejs with npm](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) and [grunt-cli](http://gruntjs.com/getting-started).


## Getting Started

 1. Clone this repo
 1. Ensure [Ruby is installed](https://www.ruby-lang.org/en/documentation/installation/)
 1. Ensure [Bundler is installer](http://bundler.io/)
 1. Ensure [NodeJS and NPM are installed](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
 1. Ensure the [grunt-cli node module](http://gruntjs.com/getting-started) is installed globally
 1. Run `npm install`
 1. To build the site run `grunt`

### Grunt Tasks

 - `grunt test` Runs `jscs` and `jshint` checks on the `Gruntfile` itself, and all configured tasks in `build/tasks`
 - `grunt css` Compiles `styles/index.styl` into `dist/style.css` using the stylus preprocessor
 - `grunt dev` Serves the content of `_site` on [localhost:4000](http://localhost:4000) then runs both a `watch` task to compile stylus files AND `jekyll serve` so all site modifications are automatically pushed to `_site`
 - `grunt` The default task runs `test`, `css`, and `jekyll:build` tasks outputting the static site into `_site`
 - `grunt deploy-to-prod` Runs the default task then attempts to push to the site's `S3` bucket using `AWS CLI` which must already be locally installed and configured (which is outside the scope of this project).
 - `grunt push-episodes` Pushes the contents of the ignored `_audio` directory to the episodes `S3` bucket with `public-read` access using the `AWS CLI`
 - `grunt gen-stats` Runs `S3 log analyzer` on download logs into the ignored `_s3_logs` directory and generates `report.html` for stats.
 - `grunt oggify` Uses `ffmpeg` in the ignored `_audio` directory to generate complimentary `ogg` files for any `m4a` file present.