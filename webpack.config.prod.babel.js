import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpackCombineLoaders from 'webpack-combine-loaders';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';

export default {
  module: {
    // -loader postfixをつけないとnode_modulesまで対象に含まれてしまう
    // ref: http://stackoverflow.com/a/29890656
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract(
          'style-loader',
          webpackCombineLoaders([
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          ])
        ),
      },
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loaders: [
          'source-map-loader',
        ],
      },
    ],
  },
  output: {
    // 本来は相対パスで問題ないが、
    // server.js経由で参照される場合は絶対パスである必要がある
    path: path.join(__dirname, 'app', 'prod', 'assets', 'js'),
    publicPath: '/assets/js/',
    filename: 'main.js',
  },
  plugins: [
    // Webpack’s build processを本番ビルド用にする
    // ref: http://moduscreate.com/optimizing-react-es6-webpack-production-build/
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // uglify時のエラーは表示しない
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    // 本番用ディレクトリにindex.htmlをコピー
    new CopyWebpackPlugin([
      {
        from: 'index.html',
        to: path.join(__dirname, 'app', 'prod'),
      },
    ]),
    new ExtractTextWebpackPlugin('../css/main.css', {
      allChunks: true,
    }),
  ],
};
