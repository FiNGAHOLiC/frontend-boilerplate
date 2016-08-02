import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const configure = (initialState) => {
  const store = createStore(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};

export default configure;
