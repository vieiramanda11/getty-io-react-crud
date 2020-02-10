import { RECEIVE_POSTS } from '../actions';

const initialState = { posts: [] };
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default postsReducer;
