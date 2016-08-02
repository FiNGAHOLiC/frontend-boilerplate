import * as types from '../constants/actiontypes';

export function send(value) {
  return { type: types.SEND, value };
}
