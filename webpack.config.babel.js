'use strict';

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import CopyWebpackPlugin from 'copy-webpack-plugin';

const config = {
    common: {
        context: path.join(__dirname, 'app/dev'),
        module: {
            preLoaders: [
                {
                    test: /\.js?$/,
                    loaders: [

                        // -loader postfixをつけないとnode_modulesまで対象に含まれてしまうため、
                        // 省略せずに記述すること
                        // ref: http://stackoverflow.com/a/29890656
                        'source-map-loader',
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
        },
    },
    dev: {
        entry: {
            app: [
                // HMR用の指定は本番ビルドでは不要なので開発ビルド時のみに含める
                'webpack-dev-server/client?http://localhost:3000',
                'webpack/hot/only-dev-server',
                './assets/js/src/app.jsx',
            ],
        },
        output: {
            // 本来は相対パスで問題ないが、
            // server.js経由で参照される場合は絶対パスである必要がある
            path: path.join(__dirname, 'app/dev/assets/js'),
            filename: 'app.js',
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
        // webpack-dev-server用の設定
        devServer: {
            publicPath: '/',
            contentBase: 'app/dev',
            hot: true,
            historyApiFallback: true,
            stats: {
                colors: true,
                chunks: false,
            },
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: [
                        // -loader postfixをつけないとnode_modulesまで対象に含まれてしまうため、
                        // 省略せずに記述すること
                        // ref: http://stackoverflow.com/a/29890656
                        'react-hot-loader',
                        'babel-loader',
                    ],
                    include: path.join(__dirname, 'app'),
                },
            ],
        },
        devtool: 'inline-source-map',
    },
    prod: {
        entry: {
            app: [
                './assets/js/src/app.jsx',
            ],
        },
        output: {
            // 本来は相対パスで問題ないが、
            // server.js経由で参照される場合は絶対パスである必要がある
            path: path.join(__dirname, 'app/prod/assets/js'),
            filename: 'app.js',
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: 'index.html',
                    to: path.join(__dirname, 'app/prod'),
                }
            ]),
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: [
                        // -loader postfixをつけないとnode_modulesまで対象に含まれてしまうため、
                        // 省略せずに記述すること
                        // ref: http://stackoverflow.com/a/29890656
                        'babel-loader'
                    ],
                },
            ],
        },
        devtool: 'eval',
    },
};

export default merge(
    config.common,
    process.argv.includes('--prod')
        ? config.prod
        : config.dev
);
