import * as types from '../constants/actiontypes';

const initialState = {
  value: null,
};

const memo = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND:
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
};

export default memo;
