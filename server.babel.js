import opn from 'opn';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel';

const port = 3000;
const host = 'localhost';
const url = `http://${host}:${port}`;

webpackConfig.entry.app.unshift(
  `webpack-dev-server/client?${url}`,
  'webpack/hot/only-dev-server',
  'react-hot-loader/patch',
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
}).listen(port, host, () => {
  const options = { app: 'google chrome' };
  return opn(url, options);
});
