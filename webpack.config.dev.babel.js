import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackCombineLoaders from 'webpack-combine-loaders';

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
        loaders: [
          'style-loader',
          webpackCombineLoaders([
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
          ]),
        ],
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
    path: path.join(__dirname, 'app', 'dev', 'assets', 'js'),
    publicPath: '/assets/js/',
    filename: 'main.js',
  },
  plugins: [
    // テンプレートを元に開発環境用のHTMLを作成
    new HtmlWebpackPlugin({
      inject: false,
      isProd: false,
      filename: '../../index.html',
      template: 'src/index.ejs',
    }),
  ],
  devtool: 'inline-source-map',
};
