'use strict';

import path from 'path';
import merge from 'webpack-merge';

const buildMode = process.env.NODE_ENV;
const isProductionBuild = process.argv.includes('--p');

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

export default merge(
    buildSettings.common,
    isProductionBuild ? buildSettings.prod : buildSettings.dev
);
