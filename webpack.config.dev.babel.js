import path from 'path';

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
          'css-loader',
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
  devtool: 'inline-source-map',
};
