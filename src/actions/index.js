import axios from 'axios';

export const RECEIVE_POSTS = 'GET_POSTS';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const getPosts = () => {
  return dispatch => {
    return axios.get(BASE_URL)
      .then(response => {
        dispatch({ type: RECEIVE_POSTS, posts: response.data });
      })
      .catch(error => { throw (error); });
  };
};
