import merge from 'webpack-merge';

import webpackConfigCommon from './webpack.config.common.js';
import webpackConfigDev from './webpack.config.dev.js';
import webpackConfigProd from './webpack.config.prod.js';

const isProd = process.argv.includes('--prod');

export default merge(
  webpackConfigCommon,
  isProd ? webpackConfigProd : webpackConfigDev
);
