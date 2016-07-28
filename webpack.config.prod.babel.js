import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';


export default {
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
};
