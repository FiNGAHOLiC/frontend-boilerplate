'use strict';

import path from 'path';

const paths = {
    dev: path.join(__dirname, 'app/development'),
    prod: path.join(__dirname, 'app/production'),
};

const settings = {
    js: {
        entry: {
            app: `${paths.dev}/assets/js/app.jsx`,
        },
        output: {
            path: `${paths.prod}/assets/js/`,
            filename: '[name].js',
        },
    },
};

module.exports = {
    entry: settings.js.entry,
    output: settings.js.output,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
        ],
        preLoaders: [
            {
                test: /\.js?$/,
                loader: 'source-map',
            },
        ],
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
    },
};