import { createStore } from 'redux';
import rootReducer from '../reducers';

const configure = (initialState) => (
  createStore(rootReducer, initialState)
);

export default configure;
