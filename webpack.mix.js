const mix = require('laravel-mix');
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue({ version: 2 })
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve("resources/js")
            }
        },
        output: {
            chunkFilename: "js/[name].js?id=[chunkhash]"
        },
        plugins: [
            new WebpackShellPluginNext({
                onBuildStart: {
                    scripts: [
                        "php artisan lang:js -c resources/js/lang.js --no-lib --quiet"
                    ]
                },
                onBuildEnd: []
            })
        ]
    });

if (mix.inProduction()) {
    mix.version();
}
