import merge from 'webpack-merge';

import webpackConfigCommon from './webpack.config.common.babel.js';
import webpackConfigDev from './webpack.config.dev.babel.js';
import webpackConfigProd from './webpack.config.prod.babel.js';

const isProd = process.argv.includes('--prod');

export default merge(
  webpackConfigCommon,
  isProd ? webpackConfigProd : webpackConfigDev
);
