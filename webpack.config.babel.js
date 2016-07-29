import deepmerge from 'deepmerge';

import webpackConfigCommon from './webpack.config.common.babel';
import webpackConfigDev from './webpack.config.dev.babel';
import webpackConfigProd from './webpack.config.prod.babel';

const isProd = process.env.NODE_ENV === 'production';

export default deepmerge(
  webpackConfigCommon, isProd ? webpackConfigProd : webpackConfigDev
);
