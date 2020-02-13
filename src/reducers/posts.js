import {
  RECEIVE_POSTS, ADD_POST, REMOVE_POST, REPLACE_POST,
} from '../actions';

const initialState = { posts: [] };
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.payload, ...state];
    case REMOVE_POST:
      return state.filter(post => post.id !== action.payload.id);
    case REPLACE_POST:
      return state.map(post => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
            body: action.payload.body,
          };
        } return post;
      });
    default:
      return state;
  }
};

export default postsReducer;
