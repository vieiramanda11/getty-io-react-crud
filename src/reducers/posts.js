import { RECEIVE_POSTS, ADD_POST } from '../actions';

const initialState = { posts: [] };
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default postsReducer;
