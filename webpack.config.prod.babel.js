import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';


export default {
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
    new CopyWebpackPlugin([
      {
        from: 'index.html',
        to: path.join(__dirname, 'app', 'prod'),
      },
    ]),
  ],
};
