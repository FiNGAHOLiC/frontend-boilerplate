'use strict';

import path from 'path';
import merge from 'webpack-merge';

const buildMode = process.env.NODE_ENV;

const buildPaths = {
    dev: path.join(__dirname, 'app/development'),
    prod: path.join(__dirname, 'app/production'),
};

const assetSettings = {
    js: {
        entry: {
            app: `${buildPaths.dev}/assets/js/app.jsx`,
        },
        output: {
            path: `${buildPaths.prod}/assets/js/`,
            filename: '[name].js',
        },
    },
};

const buildSettings = {
    common: {
        entry: assetSettings.js.entry,
        output: assetSettings.js.output,
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
        },
    },
    dev: {
        devtool: 'source-map',
        preLoaders: [
            {
                test: /\.js?$/,
                loader: 'source-map',
            },
        ],
    },
    prod: {},
};

if (buildMode === 'dev') {
    module.exports = merge(buildSettings.common, buildSettings.dev);
}

if (buildMode === 'prod') {
    module.exports = merge(buildSettings.common, buildSettings.prod);
}
