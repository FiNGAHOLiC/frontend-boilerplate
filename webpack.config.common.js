import path from 'path';

export default {
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
};
