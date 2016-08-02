import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';

import configure from './store';

const store = configure();
const elRoot = document.getElementById('js-app');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  elRoot
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // HMRさせるために現段階ではrequire()するしかないため
    // eslintのエラー検知を無視する設定を追加している
    // ref: https://goo.gl/GSa5zv

    // eslint-disable-next-line global-require
    const NextApp = require('./containers/App').default;

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      elRoot
    );
  });
}
