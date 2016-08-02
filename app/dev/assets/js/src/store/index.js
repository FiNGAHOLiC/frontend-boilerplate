import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const configure = (initialState) => (
  createStore(rootReducer, initialState)
);

export default configure;
