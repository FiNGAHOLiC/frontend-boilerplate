import path from 'path';

export default {
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
};
