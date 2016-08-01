import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import fetchItemData from './utils/fetchItemData';

let itemData = [];

const rootEl = document.getElementById('js-app');

window.addEventListener('load', () => {
  fetchItemData().then((res) => {
    itemData = res.data;
    ReactDOM.render(
      <AppContainer>
        <App items={res.data} />
      </AppContainer>,
      rootEl
    );
  });
}, false);

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
        <NextApp items={itemData} />
      </AppContainer>,
      rootEl
    );
  });
}
