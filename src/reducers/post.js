import { RECEIVE_POST, UPDATE_POST } from '../actions';

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POST:
      return action.post;
    case UPDATE_POST:
      return {
        id: action.id,
        title: action.payload.title,
        body: action.payload.body,
      };
    default:
      return state;
  }
};

export default postReducer;
