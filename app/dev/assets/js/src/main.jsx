import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('js-app');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// HMR用の設定
// ※本番用ビルドでは実行されず、開発環境のみで有効
if (module.hot) {
  module.hot.accept('./App', () => {
    // HMRさせるために現段階ではrequire()するしかないため
    // eslintのエラー検知を無視する設定を追加している
    // ref: https://goo.gl/GSa5zv

    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
