# Rubber Duck Cast

Working on this repo requires [nodejs with npm](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) and [grunt](http://gruntjs.com/getting-started).


## Getting Started

 1. Clone this repo
 1. Run `npm install`
 1. To build the site run `grunt`

### Grunt Tasks

 - `grunt test` Runs `jscs` and `jshint` checks on any javascript files in the `js` directory, the `Gruntfile` itself, and all configured tasks in `build/tasks`
 - `grunt css` Compiles `styles/index.styl` into `dist/style.css` using the stylus preprocessor
 - `grunt dev` Serves the content of `_site` on [localhost:4000](http://localhost:4000) then runs both a `watch` task to compile javascript and stylus files AND `jekyll serve` so all site modifications are automatically pushed to `_site`
 - `grunt js` Runs the `r.js` optimizer on the site's javascript code generating `optimized.js` in `dist/`
 - `grunt img` Runs the `grunticon` task which takes all `PNGs` and `SVGs` inside `img/` and creates data URLs for them in CSS files and `PNG` fallbacks. Also generates a loader which intelligently swaps out what is shown to the user given their browser.
 - `grunt` The default task runs `test`, `css`, `js`, `img`, and `jekyll:build` tasks outputting the static site into `_site`
 - `grunt deploy-to-prod` Runs the default task then attempts to push to the site's `S3` bucket using `AWS CLI` which must already be locally installed and configured (which is outside the scope of this project).
