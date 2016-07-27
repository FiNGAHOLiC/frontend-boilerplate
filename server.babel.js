import opn from 'opn';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel.js';

const port = 3000;
const url = `http://localhost:${port}`;

webpackConfig.entry.app.unshift(
  `webpack-dev-server/client?${url}`,
  'webpack/hot/only-dev-server'
);

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  contentBase: 'app/dev',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    chunks: false,
  },
}).listen(port, 'localhost', () => {
  const options = { app: 'google chrome' };
  return opn(url, options);
});
