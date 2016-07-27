'use strict';

import path from 'path';
import merge from 'webpack-merge';

import CopyWebpackPlugin from 'copy-webpack-plugin';

const config = {
  // 開発・リリース用のビルド設定
  common: {
    context: path.join(__dirname, 'app', 'dev'),
    entry: {
      app: [
        './assets/js/src/app.jsx',
      ],
    },
    module: {
      preLoaders: [
        {
          test: /\.js?$/,
          loaders: [

            // -loader postfixをつけないとnode_modulesまで対象に含まれてしまう
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
  // 開発用のビルド設定
  dev: {
    output: {
      // 本来は相対パスで問題ないが、
      // server.js経由で参照される場合は絶対パスである必要がある
      path: path.join(__dirname, 'app', 'dev', 'assets', 'js'),
      publicPath: '/assets/js/',
      filename: 'app.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: [
            // -loader postfixをつけないとnode_modulesまで対象に含まれてしまう
            // ref: http://stackoverflow.com/a/29890656
            'react-hot-loader',
            'babel-loader',
          ],
          include: [
            path.join(__dirname, 'app'),
          ],
        },
      ],
    },
    plugins: [],
    devtool: 'inline-source-map',
  },
  // リリース用のビルド設定
  prod: {
    output: {
      // 本来は相対パスで問題ないが、
      // server.js経由で参照される場合は絶対パスである必要がある
      path: path.join(__dirname, 'app', 'prod', 'assets', 'js'),
      publicPath: '/assets/js/',
      filename: 'app.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: [
            // -loader postfixをつけないとnode_modulesまで対象に含まれてしまう
            // ref: http://stackoverflow.com/a/29890656
            'babel-loader',
          ],
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'index.html',
          to: path.join(__dirname, 'app', 'prod'),
        },
      ]),
    ],
    devtool: 'eval',
  },
};

export default merge(
  config.common,
  process.argv.includes('--prod') ? config.prod : config.dev
);
