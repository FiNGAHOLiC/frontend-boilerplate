import merge from 'webpack-merge';

import webpackConfigCommon from './webpack.config.common.babel';
import webpackConfigDev from './webpack.config.dev.babel';
import webpackConfigProd from './webpack.config.prod.babel';

const isProd = process.argv.includes('--prod');

export default merge(
  webpackConfigCommon,
  isProd ? webpackConfigProd : webpackConfigDev
);
