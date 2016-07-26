'use strict';

import path from 'path';
import merge from 'webpack-merge';

const buildMode = process.env.NODE_ENV;

const assetsDir = {
    js: {
        src: path.join(__dirname, 'app/assets/js/src/'),
        dist: path.join(__dirname, 'app/assets/js/dist/'),
    },
};

const assetsSettings = {
    js: {
        entry: {
            app: `${assetsDir.js.src}app.jsx`,
        },
        output: {
            path: assetsDir.js.dist,
            filename: '[name].js',
        },
    },
};

const buildSettings = {
    common: {
        entry: assetsSettings.js.entry,
        output: assetsSettings.js.output,
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
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
            extensions: ['', '.js', '.jsx'],
        },
    },
    dev: {
        devtool: 'inline-source-map',
    },
    prod: {
        devtool: 'eval',
    },
};

let settings;

if (buildMode === 'dev') {
    settings = merge(buildSettings.common, buildSettings.dev);
}

if (buildMode === 'prod') {
    settings = merge(buildSettings.common, buildSettings.prod);
}

export default settings;
