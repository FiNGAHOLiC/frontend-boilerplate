import path from 'path';

export default {
  output: {
    // 本来は相対パスで問題ないが、
    // server.js経由で参照される場合は絶対パスである必要がある
    path: path.join(__dirname, 'app', 'dev', 'assets', 'js'),
    publicPath: '/assets/js/',
    filename: 'main.js',
  },
  plugins: [],
  devtool: 'inline-source-map',
};
