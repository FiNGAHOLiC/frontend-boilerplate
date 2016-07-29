import path from 'path';
import webpackCombineLoaders from 'webpack-combine-loaders';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';

export default {
  context: path.join(__dirname, 'app', 'dev'),
  entry: {
    app: [
      './assets/js/src/Main.jsx',
    ],
  },
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
  plugins: [
    new ExtractTextWebpackPlugin('../css/main.css', {
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
