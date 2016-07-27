'use strict';

import opn from 'opn';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel.js';

const port = 3000;

new WebpackDevServer(
    webpack(webpackConfig), webpackConfig.devServer
).listen(port, 'localhost', (error) => {
    if (error) {
        return console.log(error);
    }

    opn(`http://localhost:${port}`, {app: 'google chrome'});
});