import { RECEIVE_POST } from '../actions';

export default function articleReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POST:
      return action.post;
    default:
      return state;
  }
}
