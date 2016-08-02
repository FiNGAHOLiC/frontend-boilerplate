import { handleActions } from 'redux-actions';

const initialState = {
  value: null,
};

export default handleActions({
  'send message'(state, action) {
    return {
      value: action.payload,
    };
  },
}, initialState);
